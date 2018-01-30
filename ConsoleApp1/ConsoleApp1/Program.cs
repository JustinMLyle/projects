using System;


namespace BlackJack
{
    public class dealer
    {
        private static int[] cardType = new int[13] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 };
        private static Random ran = new Random();
        private static int dealer1stDraw = cardType[ran.Next(0, cardType.Length)];
        private static int dealer2ndDraw = cardType[ran.Next(0, cardType.Length)];
        int dealerScore = dealer1stDraw + dealer2ndDraw;

        public int Dealer1stDraw
        {            
            get
            {
                return dealer1stDraw;
            }
          
        }

        public int Dealer2ndDraw
        {
            
            get
            {
                return dealer2ndDraw;
            }
          
        }
        public int DealerScore
        {            
            
            get
            {
                return dealerScore;
            }
        }

        public void getHand()
        {            
            Console.WriteLine("Dealer drew a " + dealer1stDraw + " and a " + dealer2ndDraw);
            Console.WriteLine("Dealer Score Is: " + dealerScore);
            Console.ReadLine();
    }
        

    }


    public class player
    {


        private static int[] cardType = new int[13] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 };
        private static Random ran = new Random();
        private static int player1stDraw = cardType[ran.Next(0, cardType.Length)];
        private static int player2ndDraw = cardType[ran.Next(0, cardType.Length)];
        int playerScore = player1stDraw + player2ndDraw;

        public int Player1stDraw
        {
            get
            {
                return player1stDraw;
            }

        }

        public int Player2ndDraw
        {

            get
            {
                return player2ndDraw;
            }

        }
        public int PlayerScore
        {

            get
            {
                return playerScore;
            }
        }

        public void getHand()
        {
            Console.WriteLine("Player drew a " + player1stDraw + " and a " + player2ndDraw);
            Console.WriteLine("Player Score Is : " + playerScore);
            Console.ReadLine();
        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            dealer dealerMan = new dealer();
            
            player playerWoman = new player();

            playerWoman.getHand();
            dealerMan.getHand();
            

            if(dealerMan.DealerScore > playerWoman.PlayerScore)
            {
                Console.WriteLine("Dealer Wins!");
            }
            else
            {
                Console.WriteLine("Player Wins!");
            }
            Console.ReadLine();

        }
    }
}


 
    
  