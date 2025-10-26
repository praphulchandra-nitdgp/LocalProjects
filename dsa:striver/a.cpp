#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin>>n;
    vector<int> arr;
    for(int i = 0; i < n; i++) {
        int a;
        cin>>a;
        arr.push_back(a);
    }
    int hash[100];
    for(int i = 0; i < n; i++) {
        hash[arr[i]] += 1;
    }
    for(int i = 0; i < n; i++) {
        cout<<hash[arr[i]]<<endl;
    }

}
