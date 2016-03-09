double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int nums3[nums1Size+nums2Size];
    int mid=(nums1Size+nums2Size)/2;
    int p1=0,p2=0;
    int i=0;
    for(i=0;i<=mid;)
    {
        while(p1<nums1Size&&p2<nums2Size)
            nums3[i++]=nums1[p1]<=nums2[p2]?nums1[p1++]:nums2[p2++];
        if(p1>=nums1Size)
            nums3[i++]=nums2[p2++];
        else if(p2>=nums2Size)
            nums3[i++]=nums1[p1++];
    }
    if((nums1Size+nums2Size)%2==0)
    {
        return ((double)nums3[mid]+(double)nums3[mid-1])/2;
    }
    else
    {
        return (double)nums3[mid];
    }
}


