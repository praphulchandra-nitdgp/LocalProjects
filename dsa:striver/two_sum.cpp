#include<iostream>
#include<vector>

using namespace std;

string twoSumDetect(vector<int> arr,int target){
    for(int i = 0;i<arr.size();i++){
        for(int j=i+1;j<arr.size();j++){
            if(arr[i]+arr[j]== target) return "yes";
        }         
    }
    return "no";
}
int main() {
    int target;
    cin>> target;
    vector<int> arr;
    arr = {1,2,3,4,5};
    cout << twoSumDetect(arr,target) << endl;
}



