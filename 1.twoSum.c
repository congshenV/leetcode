/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target) {
    int* answer;
    int i,j;
    for(i=0;i<numsSize;i++)
    {
        j=i+1;
        for(;j<numsSize;j++)
        {
            if(nums[i]+nums[j]==target)
            {
                answer[0]=i;
                answer[1]=j;
                return answer;
            }
        }
    }
    
}

