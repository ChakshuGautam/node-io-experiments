function runEventLoopBenchmark(iterations) {
    const startTime = performance.now();

    let count = 0;

    function tick() {
        count++;
        if (count < iterations) {
            process.nextTick(tick); // Simulate asynchronous operation
        } else {
            const endTime = performance.now();
            const elapsed = endTime - startTime;
            console.log(`Event loop benchmark completed in ${elapsed.toFixed(2)} ms. Ticks per second: ${(iterations / (elapsed.toFixed(2) / 1000)).toFixed(0)}`);
        }
    }

    tick();
}

const iterations = 100_000_000;
runEventLoopBenchmark(iterations);
