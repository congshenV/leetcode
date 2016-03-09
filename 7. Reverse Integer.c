int getone(int x,int y)
{
    if(y==1)
        return x%10;
    int temp=0;
    int f=x%(int)pow(10,y);
    int s=x%(int)(pow(10,y-1));
    temp=(f-s)/pow(10,y-1);
    return temp;
}
int length(int x)
{
    int i=0;
    if(x<0)
        x=-x;
    while(x>=1)
    {
        x=x/10;
        i++;
    }
    return i;
}


int reverse(int x) {
    int len=0;
    long answer=0;
    int i;
    len=length(x);
    if(len==1)
        return x;
    int j=len;
    for(i=0;j>0;j--,i++)
    {
        answer=answer+getone(x,j)*pow(10,i);
    }
    if(answer>2147483647||answer<-2147483648)
        return 0;
    return (int)answer;
}


