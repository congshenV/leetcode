#include <stdio.h>
void exchange(int* x,int* y)
{
    int temp=*x;
    *x=*y;
    *y=temp;
}
/*
**此部分为分，将数组进行划分，分为一个个小数组
*/
int* quick(int* nums,int head,int tail)
{
    if(head==tail||head>tail||head<0)
        return nums;
    int i=sort(nums,head,tail);
    quick(nums,head,i-1);
    quick(nums,i+1,tail);
    return nums;
}
/*
**此部分为定位，将第一个数定到合适的位置，并返回该位置
*/
int sort(int* nums,int head,int tail)
{
    int i=head,j;
    int key=nums[head];
    for(j=head+1;j<=tail;j++)
    {
        if(nums[j]<key)
        {
            i++;
            exchange(nums+i,nums+j);
        }
    }
    exchange(nums+head,nums+i);
    return i;
}
int main()
{
    int nums[]={4,3,1,2,5,5,5,5,101};
    int len=sizeof(nums)/sizeof(int);
    printf("the len is %d \n",len);
    quick(nums,0,len-1);
    int i;
    for(i=0;i<len;i++)
        printf("%d ",nums[i]);
}