using System;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            
            divisible OneHundo = new divisible();
            OneHundo.RangeEnd = 100 % 3;

            Console.WriteLine(OneHundo);
            Console.ReadLine;
            
            
        }
    }

    class divisible
    {
        

        public int RangeEnd { get; set; }
    }
}
