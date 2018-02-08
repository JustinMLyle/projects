using System;
using System.Collections.Generic;
using System.Linq;

namespace checkpoint1app
{
    class Program
    {
        
        
        
        
        static void Main(string[] args)
        {
            Console.WriteLine("Select a checkpoint problem (1-5) or press any other key to exit: ");            
            int num = Convert.ToInt32(Console.ReadLine());
            //Selectors
            if (num == 1) //The Divider Program
            {
                divider Divider = new divider();
                Console.WriteLine("The Number of ints divisible by 3 in 100 is: ");
                Divider.noRemain();
            }

            if (num == 2) //The Adder Program
            {
                adder Adder = new adder();
                adder.add();

                

            }

            if (num == 3) //The Factor Program
            {

                factorer Factorer = new factorer();
                factorer.factor();

            }

            if (num == 4) //The Random Guesser Program
            {
                randomer Randomer = new randomer();
                randomer.guess();
                
            }

            if (num == 5) //The Find Max Program
            {
                findMaxer FindMaxer = new findMaxer();
                findMaxer.Max();
            }

            Console.ReadLine();

        }
    }

    public class divider
    {
        public static int count = 0;

        public int noRemain()
        {

            for (double i = 1; i <= 100; i++)
            {

                if (i % 3 == 0)
                {                    
                    count = count + 1;
                }
            }
            Console.WriteLine(count);
            return count;
        }

    }

    public class adder
    {
        private static int storedEntry = 0;

        

        public static void add() {
            Console.WriteLine("Enter a number you would like to sum or type 'ok' to exit");
            string userEntry = Console.ReadLine();

            

            if (userEntry.ToLower() != "ok"){
                int userInt = Convert.ToInt32(userEntry);
                storedEntry = storedEntry + userInt;
                Console.WriteLine("Current Total is: " + storedEntry);
                adder.add();
            }
            else
            {
                Environment.Exit(0);
            }
        }
}

    public class factorer
    {
        

        public static void factor()
        {
            factorer userFactor = new factorer();

            Console.WriteLine("Enter a number you would like the factors of");
            int userEntry = Convert.ToInt32(Console.ReadLine());
            userFactor.Factor(userEntry);                        
            
            

        }
        
        
        public List<int> Factor(int num)
            
        {
            List<int> factors = new List<int>();
            
            int max = (int)Math.Sqrt(num);  //round down
            for (int factor = 1; factor <= max; ++factor)
            { //test from 1 to the square root, or the int below it, inclusive.
                if (num % factor == 0)
                {                    
                    factors.Add(factor);                    
                    if (factor != num / factor)
                    { // Don't add the square root twice!
                        factors.Add(num / factor);                        
                    }

                }
            }
            Console.WriteLine("The Factors are: ");
            factors.ForEach(Console.WriteLine); //displays the list of factors
            

            return factors;
        
        }
        



    }

    public class randomer
    {
        
        private static Random rnd = new Random();
        public static int secretNum = rnd.Next(1, 10); //randomise
        private static int guess1;
        private static int guess2;
        private static int guess3;
        private static int guess4;

        public static void guess() 
        {
            //Get inputs
            Console.WriteLine("Pick a number between 1 and 10: ");
            string userEntry = Console.ReadLine();
            guess1 = Convert.ToInt32(userEntry);

            Console.WriteLine("Lets see if we can increase our odds! Pick an additional number: ");
            userEntry = Console.ReadLine();
            guess2 = Convert.ToInt32(userEntry);

            Console.WriteLine("Lets see if we can increase our odds! Pick an additional number: ");
            guess3 = Convert.ToInt32(userEntry);
            userEntry = Console.ReadLine();

            Console.WriteLine("Lets see if we can increase our odds! Pick an additional number: ");
            guess4 = Convert.ToInt32(userEntry);
            userEntry = Console.ReadLine();

            //print results
            if (guess1 == secretNum)
            {

                Console.WriteLine("You guessed " + guess1);
  
            }
            else
            {
                Console.WriteLine("You guessed " + guess1 + ", this is incorrect" );
            }

            if (guess2 == secretNum)
            {
                Console.WriteLine("You guessed " + guess2);

            }
            else
            {
                Console.WriteLine("You guessed " + guess2 + ", this is incorrect");
            }

            if (guess3 == secretNum)
            {
                Console.WriteLine("You guessed " + guess3);

            }
            else
            {
                Console.WriteLine("You guessed " + guess3 + ", this is incorrect");
            }
            if (guess4 == secretNum)
            {
                Console.WriteLine("You guessed " + guess4);

            }
            else
            {
                Console.WriteLine("You guessed " + guess4 + ", this is incorrect");
            }

            Console.WriteLine("The Secret Number Was " + secretNum);

        }

    }

    public class findMaxer
    {
        public static List<int> maxList = new List<int>();

        public static void Max()
        {
            Console.WriteLine("Enter numbers separated by a comma to find the max value");
            string userEntry = Console.ReadLine();
            
            maxList.AddRange(userEntry.Split(',').Select(i => int.Parse(i))); //add every number to the list separated by a comma

            int result = maxList.Max();

            Console.WriteLine(result);

        }        
         
    }
}
