using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FizzBuzz
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = 100;


            Enumerable.Range(1, n).Select(i =>
            (i % 15 == 0) ? "FizzBuzz" :
            (i % 3 == 0) ? "Fizz" :
            (i % 5 == 0) ? "Buzz" :
            i.ToString()).ToList()
            .ForEach(Console.WriteLine);

            Console.WriteLine("End Fizzing and Buzzing");

            divisible OneHundo = new divisible();
            OneHundo.Value = 100 / 3;

            Console.WriteLine("100 has " + OneHundo.Value + " divisors");
            Console.ReadLine();

        }
    }


   
    class divisible
    {
        public int Value { get; set; }
    }

    class userSummer
    {
        static void Secondary(string[] args)
        {
            Console.WriteLine("Enter a whole number you would like to add or type 'ok' to exit");
            SummerUserValue NewVal = new SummerUserValue;


            String userInput = Console.ReadLine();

            if(userInput.ToLower() == "ok")
            {
                Environment.Exit(0);
            }
            else
            {
                int intTemp = Convert.ToInt32(userInput);
                NewVal.newSum = int intTemp;


            }



}
    }
    class SummerUserValue
    {
        public int newSum { get; set; }
    }

}
