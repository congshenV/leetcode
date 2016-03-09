int romanToInt(char* s) {
    int len=strlen(s);
    int i;
    int roman[len];
    int romantotle=0;
    for(i=len-1;i>=0;i--)
    {
        switch(s[i])
        {
            case 'I':   roman[i]=1;
                break;
            case 'V':   roman[i]=5;
                break;
            case 'X':   roman[i]=10;
                break;
            case 'L':   roman[i]=50;
                break;
            case 'C':   roman[i]=100;
                break;
            case 'D':   roman[i]=500;
                break;
            case 'M':   roman[i]=1000;
                break;
            default:    break;
        }
        if(roman[i]<roman[i+1]&&i<len-1)
            roman[i]=-roman[i];
        romantotle+=roman[i];
    }
    return romantotle;
    
}
//¢ñ£¨1£©¢õ£¨5£©¢ú£¨10£©L£¨50£©C£¨100£©D£¨500£©M£¨1000£© 


