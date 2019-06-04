
interface employee
{
  getdata();
  putdata();

}

class testing implements employee
{

    getdata()
    {

        console.log("this is getdata function");
    }
    putdata()
    {
        console.log("this is putdata function in ios");
    }
}
var testobj = new testing();
testobj.getdata();
testobj.putdata();

