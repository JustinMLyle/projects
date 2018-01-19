using System;

namespace Classwork
{
    class MainClass
    {
        public static void Main(string[] args)

        {
            int yards = 0;
            Console.WriteLine("How many Yards do you want to convert?");
            string yardInput = Console.ReadLine();
            int.TryParse(yardInput, out yards);
            yards = yards * 36;


            Console.WriteLine(yardInput + " yards is equal to " + yards + " inches");



        }
    }
}
