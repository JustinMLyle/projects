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

            Console.ReadLine();
        }
    }
}
