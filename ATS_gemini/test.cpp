#include <iostream>
#include <vector>
using namespace std;

struct BIT {
    int n;
    vector<int> t;
    BIT(int n = 0) : n(n), t(n + 1, 0) {}
    void add(int i, int v) {
        for (; i <= n; i += i & -i) t[i] += v;
    }
    int sum(int i) const {
        int s = 0;
        for (; i; i -= i & -i) s += t[i];
        return s;
    }
    int range(int l, int r) const { return l > r ? 0 : sum(r) - sum(l - 1); }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T;
    cin >> T;
    const int BITS = 31;

    while (T--) {
        int N, Q;
        cin >> N >> Q;
        vector<int> A(N + 1);
        for (int i = 1; i <= N; ++i) cin >> A[i];

        vector<BIT> bit(BITS, BIT(N));
        for (int i = 1; i <= N; ++i)
            for (int b = 0; b < BITS; ++b)
                if ((A[i] >> b) & 1) bit[b].add(i, 1);

        while (Q--) {
            int k, x1, y1, x2, y2;
            cin >> k >> x1 >> y1 >> x2 >> y2;
            int b = k; // Use k directly as the bit index (0-based)

            long long o1 = bit[b].range(x1, y1);
            long long o2 = bit[b].range(x2, y2);
            long long l1 = y1 - x1 + 1;
            long long l2 = y2 - x2 + 1;
            long long z1 = l1 - o1;
            long long z2 = l2 - o2;

            cout << o1 * z2 + z1 * o2 << '\n';
        }
    }
    return 0;
}
