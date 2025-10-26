#include <iostream>
#include <array>
#include <vector>

using namespace std;

int solve(int n, vector<int>& a, vector<int>& b) {
    int i = 0;
    int j = 0;
    while(n--) {
        if(a[i]>b[j]) j++;
        else i++,j++;
    }
    return j-i;
}

int main(){
    int t;
    cin >> t;

    while(t--) {
        int n;
        cin >> n;

        vector<int> a(n);
        for(int i=0 ;i<n;i++){
            cin >>a[i];
        }
        vector<int> b(n);
        for(int i=0 ;i<n;i++){
            cin >>b[i];
        }
        cout<<solve(n,a,b)<<endl;
    }

}
