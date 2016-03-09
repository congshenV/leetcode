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

bool isPalindrome(int x) {
    int len=length(x);
    int temp=x;
    if(temp<0)
        return false;
    if(temp<10)
        return true;
    int i,j;
    for(i=1,j=len;i<=len/2;)
    {
        if(getone(temp,i++)!=getone(temp,j--))
            return false;
        else 
        {
            if(i>len/2)
                return true;
        }
    }
   
}


