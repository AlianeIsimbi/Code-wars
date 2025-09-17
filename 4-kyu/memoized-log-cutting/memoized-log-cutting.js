function cutLog(p, n) {
    let r = Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
        let q = -Infinity;
        for (let i = 1; i <= j; i++) {
            q = Math.max(q, p[i] + r[j - i]);
        }
        r[j] = q;
    }
    return r[n];
}
​