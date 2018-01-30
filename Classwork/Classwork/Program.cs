using System;

namespace Classwork
{
    public class getCardType
    {        
        string[] card = { "A", "1", "2", "3", "4", "5", "6", "7", "9", "10", "J", "Q", "K" };

        public static void cardDraw(string[] args)
        {
            Random rnd = new Random();
            int Value = rnd.Next(0, 13);

            Console.WriteLine(Value);
            Console.ReadLine();

        }
    }

    public class dealer
    {
       
        
    }

   


}
