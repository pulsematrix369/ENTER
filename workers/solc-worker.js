/* solc-worker.js: compiles Solidity using solc-js inside a Web Worker to avoid main-thread WASM limits */

self.onmessage = async (e) => {
  const msg = e.data || {};
  if (msg.type !== 'compile' || !msg.input) {
    return self.postMessage({ ok: false, error: 'Invalid worker message' });
  }

  try {
    // Try to load solc into the worker context
    const urls = [
      // Local offline fallback (place file at frontend/vendor/solc.min.js)
      '../vendor/solc.min.js',
      // jsDelivr (pkg root build)
      'https://cdn.jsdelivr.net/npm/solc@0.8.20/solc.min.js',
      // jsDelivr (dist build)
      'https://cdn.jsdelivr.net/npm/solc@0.8.20/dist/solc.min.js',
      // unpkg variants
      'https://unpkg.com/solc@0.8.20/solc.min.js',
      'https://unpkg.com/solc@0.8.20/dist/solc.min.js'
    ];

    let loaded = false;
    let lastErr = null;
    for (const u of urls) {
      try {
        importScripts(u);
        if (self.solc) { loaded = true; break; }
      } catch (err) {
        lastErr = err;
        // continue trying next URL
      }
    }

    if (!loaded || !self.solc) {
      return self.postMessage({ ok: false, error: 'Failed to load solc in worker', detail: String(lastErr || 'unknown') });
    }

    let output;
    try {
      output = JSON.parse(self.solc.compile(JSON.stringify(msg.input)));
    } catch (compileErr) {
      return self.postMessage({ ok: false, error: 'Compile threw', detail: String(compileErr) });
    }

    return self.postMessage({ ok: true, output });
  } catch (err) {
    return self.postMessage({ ok: false, error: String(err) });
  }
};
