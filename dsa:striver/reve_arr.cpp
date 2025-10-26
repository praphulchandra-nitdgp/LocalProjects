#include<iostream>

using namespace std;
void swap(int* a, int* b){
    int temp = *a;
    *a = *b;
    *b = temp;
}
void rev(int arr[],int left , int right){
    if(left >= right){
        return;
    }
    swap(&arr[left],&arr[right]);
    rev(arr,left+1,right-1);
}


int main(){
    int arr[6]= {1,2,3,4,5,6};
    rev(arr,0,5);
    for(int i = 0;i<6;i++){
        cout<< arr[i]<<" ";
    }
}