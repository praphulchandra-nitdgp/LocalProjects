#include<iostream>

using namespace std;
void swap(int* a, int* b){
    int temp = *a;
    *a = *b;
    *b = temp;
}
void rev(int arr[],int i,int N){
    if(i>=N/2){
        return;
    }
    swap(&arr[i],&arr[N-i-1]);
    rev(arr,i+1,N);
}


int main(){
    int arr[6]= {1,2,3,4,5,6};
    rev(arr,0,6);
    for(int i = 0;i<6;i++){
        cout<< arr[i]<<" ";
    }
}