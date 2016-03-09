int lengthOfLongestSubstring(char* s) {
    int len=strlen(s);
    int position[256];
    int j=0;
    for(j=0;j<256;j++)
        position[j]=-1;
    int posnow=-1;
    int answer=0;
    int i;
    for(i=0;i<len;i++)
    {
        if(position[s[i]]>posnow)
        {
            posnow=position[s[i]];
        }
        if(i-posnow>answer)
        {
            answer=i-posnow;
        }
        position[s[i]]=i;
    }
    return answer;
    
}

