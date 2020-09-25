//alert("connected");
var num=[1,1,100];
var option = prompt("select 1 or 2 or 3 or 4");
if(option==="1")
{
	printReverse(num);
}
else if(option==="2")
{
	isUniform(num);
}
else if(option==="3")
	sum(num);
else if(option=="4")
	max(num);
else
{
	alert("thanks");
}


function printReverse(num)
{
	console.log("Array is: "+num);
	console.log("Reverse Array is: ");
	for(var i=num.length-1; i>=0; i--)
	{
		console.log(num[i]);
	}
}

function isUniform(nums)
{	
	
	for(var i=nums.length-1; i>0; i--)
	{
		if(nums[0]!==nums[i])
		{
			return false;
		}	
	}
	return true;
}

function sum(num)
{
	var s=0;
	for(var i=0; i<num.length; i++)
	{
		s=s+num[i];
	}
	console.log("Array is: "+num);
	console.log("sum of array is :"+s);
}
		
function max(num)
{
	var max=0;
	for(var i=0; i<num.length; i++)
	{
		if(num[i]>max)
			max=num[i];
	}
	console.log("Array is: "+num);
	console.log(max);
}