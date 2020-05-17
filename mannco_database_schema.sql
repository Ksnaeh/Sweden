-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2019 at 11:03 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gamereview`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `AccountID` int(11) NOT NULL,
  `Username` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Password` varchar(50) CHARACTER SET utf8 NOT NULL,
  `Email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Role` varchar(10) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`AccountID`, `Username`, `Password`, `Email`, `Role`) VALUES
(1, 'NRKNordland', 'Heansk1', 'chuacheehean@gmail.com', 'admin'),
(2, 'HenrySmith', 'password', 'Smith79@gmail.com', 'Member'),
(3, 'MichealToh', 'password', 'MichealToh69@gmail.com', 'Member'),
(4, 'FtnProPlyrOwO', 'password', 'OwO@gmail.com', 'Member'),
(5, 'EnNorskSpiller', 'password', 'IamNotNorwegian@gmail.com', 'Member'),
(6, 'Sponsorme', 'PassWord', 'adamcheehean@gmail.com', 'Member'),
(7, 'Temasek', 'password', '1806562C@student.tp.edu.sg', 'Member'),
(8, 'aaaa', 'aaaa', 'aaaa', 'Member'),
(9, 'urmomgay', 'hi', 'aaaaa', 'Member'),
(10, 'cockneck', 'cock', 'cock@cockmail.cock.ck', 'Member'),
(11, 'test', 'test', 'test', 'Member');

-- --------------------------------------------------------

--
-- Table structure for table `criticreview`
--

CREATE TABLE `criticreview` (
  `CriticID` int(11) NOT NULL,
  `CriticName` varchar(100) CHARACTER SET utf8 NOT NULL,
  `CriticRating` int(11) NOT NULL,
  `CriticDesc` text COLLATE utf8_unicode_ci NOT NULL,
  `CriticLink` varchar(255) CHARACTER SET utf8 NOT NULL,
  `CriticDate` date NOT NULL,
  `GameId1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `criticreview`
--

INSERT INTO `criticreview` (`CriticID`, `CriticName`, `CriticRating`, `CriticDesc`, `CriticLink`, `CriticDate`, `GameId1`) VALUES
(1, 'Destructoid', 95, 'It may lack some of the community niceties, beloved maps (Assault, anyone?), and little features of past games, but Global Offensive delivers on the promise of a faithful, polished, and better looking Counter-Strike for whoever wants it. Even if the community doesn\'t meet the golden standard of 1.6 and Source, CS:GO will remain a multiplayer classic for those willing to put in the time to learn the maps and weapons.', 'https://www.destructoid.com/review-counter-strike-global-offensive-233724.phtml', '2012-08-24', 1),
(2, 'EuroGamer', 90, 'The core of Counter-Strike: Global Offensive is a reminder that quality can be permanent rather than fleeting, and the new additions give us new reasons to take interest and - hopefully - another way in for people who are ready for something different.', 'https://www.eurogamer.net/articles/2012-08-17-counter-strike-global-offensive-review', '2012-08-22', 1),
(3, 'PC Games', 85, 'This modern version of one of the best competitive games of all times does a good job in introducing new players to this highly tactical and skill-based gaming experience. If you are a veteran of the old days – CS:GO might disappoint you. It sure looks nice but lacks the precision that made CS 1.6 so damn good. It´s still a very good Counter-Strike, though.', 'http://www.pcgames.de/Counter-Strike-Global-Offensive-Spiel-20444/Tests/Counter-Strike-Global-Offensive-im-Test-von-PC-Games-1022490/', '2012-10-06', 1),
(4, 'GameSpot', 85, 'The traditional CS modes are excellently balanced. Games are fast-paced without being unmanageable, skill is rewarded in both the planning and outfitting stages as well as in battle, and good teamwork typically beats individual skills.', 'https://www.gamespot.com/counter-strike-global-offensive/reviews/counter-strike-global-offensive-review-6394097/', '2012-10-01', 1),
(5, 'DarkStation', 100, 'If you hadn’t had a chance to play it yet at all though, and your computer can handle it, the PC version does definitely feel like the definitive version..', 'https://www.darkstation.com/reviews/grand-theft-auto-v-2/', '2015-07-02', 2),
(6, 'IGN', 100, 'It’s technically more accomplished in every conceivable way, but it’s also tremendously ambitious in its own right. No other world in video games comes close to this in size or scope, and there is sharp intelligence behind its sense of humour and gift for mayhem...It is one of the very best video games ever made.', 'https://www.ign.com/articles/2015/04/14/gta-5-pc-review', '2015-04-18', 2),
(7, 'Guardian', 100, 'It’s been a long time coming, but Grand Theft Auto V’s PC debut is a triumph...The Rockstar Editor is endlessly entertaining. The online heists are, with friends, some of the most fun you can have in a multiplayer game. The single-player story is an exhilarating series of increasingly absurd missions.', 'https://www.theguardian.com/technology/2015/apr/16/grand-theft-auto-v-on-pc-review-rockstar', '2015-04-16', 2),
(8, 'PC Games', 95, 'One and a half years after its initial release for last-gen consoles, you’ve probably heard it before: GTA 5 is one of the best games currently out there. So go ahead and buy it already. Rockstar even did a mighty fine job with the PC port.', 'http://www.pcgames.de/GTA-5-Grand-Theft-Auto-5-Spiel-4795/Tests/Test-der-PC-Version-mit-Fazit-und-Wertung-1156622/', '2015-04-17', 2),
(9, 'Telegraph', 100, 'If there is a complaint to be had it is that, currently, there is perhaps not enough to it. The four game types are a variation on two themes, the 12 maps quickly repeat, while competitive ranked play is yet to be included. But Blizzard has made all the right noises about being committed to building on Overwatch, providing new heroes, maps and gametypes for free across the game’s lifespan.', 'https://www.telegraph.co.uk/gaming/what-to-play/overwatch-review/', '2016-05-30', 3),
(10, 'Guardian', 100, 'Blizzard’s take on the team-based shooter is as polished as you’d expect, marrying tactical breadth with an emphasis on variety and inclusivity.', 'https://www.theguardian.com/technology/2016/may/27/overwatch-review-blizzard', '2016-05-27', 3),
(11, 'Forbes', 100, 'It has been a very long time since I’ve felt this much passion for a game. Overwatch is a perfect storm. It’s a new IP, looks gorgeous, plays phenomenally and singlehandedly rekindled my desire to play a genre of game I thought I’d left behind at this point.', 'https://www.forbes.com/sites/games/2016/05/25/overwatch-review-pc-your-new-heavyweight-champion/#7f60c7af47db', '2016-05-25', 3),
(12, 'Destructoid', 100, 'You can\'t help but take note of the attention to detail immediately, even during the first few seconds of booting it up and watching a random character emote on the title screen. This arena shooter (not a MOBA) looks, sounds, and feels great, with the polish of a Pixar film without feeling overly childish', 'https://www.destructoid.com/review-overwatch-362250.phtml', '2016-05-24', 3),
(13, 'USgamer', 100, 'Pretty much everything about this game feels fresh and exciting: the class-based combat, the art style, the roster, the modes. It\'s equal parts strategic and twitchy, encouraging you to think while also rewarding skill, and its roster is a delight.', 'https://www.usgamer.net/articles/overwatch-pc-review-in-progress-usgamer', '2016-05-24', 3),
(14, 'IGN', 94, 'Overwatch is an incredible achievement in multiplayer shooter design. It bobs and weaves almost perfectly between being the quick-fix adrenaline hit you might want after a long day of work, and the thoughtful, strategic multiplayer experience that becomes the center of evening-long binges with friends. It might not have the most exhaustive list of maps and modes, but it provides nearly endless opportunities for exhilarating, coordinated play. ', 'https://www.ign.com/articles/2016/05/28/overwatch-review', '2016-05-24', 3),
(15, 'Softpedia', 90, 'I can’t help feel (that word again) that Call of Duty: WWII is a definite improvement in the series, and I can only hope that they will choose to remain in this time period. Now that Sledgehammer Games proved they are up to the task, it’s very likely they will continue with some great releases ', 'https://www.softpedia.com/reviews/games/pc/call-of-duty-wwii-pc-review-518567.shtml', '2017-11-26', 4),
(16, 'GameSpace', 90, 'If you were worried that Call of Duty would not deliver on the promise to go back to its roots, please try the game. I was skeptical, especially after the beta. I thought there was no way it could happen. I was pleasantly surprised to find out they made good on that promise. Call of Duty: WWII has an amazing, engaging, and emotional story.', 'https://www.gamespace.com/all-articles/news/review/', '2017-11-13', 4),
(17, 'IGN', 80, 'Call of Duty: WW2 offers a surprisingly fast-paced and fun World War II experience. The campaign features a more personal story, while the new War multiplayer mode alleviates some of my frustrations with the generally small multiplayer maps. Of all the parts, though, Nazi Zombies is a standout with its wonderfully creepy setting and puzzle-like tasks.', 'https://www.ign.com/articles/2017/11/08/call-of-duty-ww2-review', '2017-11-07', 4),
(18, 'GameCrate', 75, 'If you are a Call of Duty fan, you’ll have a good time (hacks aside). If you aren’t a Call of Duty fan, there isn’t much reason to come back. Playing CoD: WWII is like eating a great salmon filet; if you’re into fish, you’ll have a great time. If not, you should go find a burger or something.', 'https://www.gamecrate.com/reviews/review-call-duty-wwii-unimpressive-return-series-roots/17465', '2017-11-06', 4),
(19, 'Hooked Gamers', 75, 'All in all, it’s a strong initial start. While a little disorientating and stumbling at points, it’s believable as this player experience mirrors the confusion of Sean and Daniel, trying to find their way. There are lots of decisions to make and the game doesn’t pull punches in terms of asking you to make uncomfortable choices. The narrative also does a very good job of introducing you to the brother based mechanics, showing you how those decisions impact both Sean and Daniel in the long run. I’m excited to see where the road will take them next', 'https://www.hookedgamers.com/pc/life_is_strange_2/review/article-1987.html', '2018-10-11', 5),
(20, 'Vandal', 96, 'Fans of Max Payne in PC can be happy. Rockstar has done its homework and this is not just a port. All the virtues of the console version are here, but its graphics have been greatly improved and with a powerful machines we can enjoy an spectacle. If you like action games and your PC is up-to-date, this is a great acquisition.', 'https://vandal.elespanol.com/analisis/pc/max-payne-3/10349', '2012-06-12', 6),
(21, 'JeuxActu', 95, 'With Max Payne 3, Rockstar Games proves that the studio masters the action-type game in the most brilliant way, despite Max Payne 3 not being an open-world title. If there were no doubts about narration, the gameplay system also remains very atttractive thanks to the perfect introduction of the bullet time and the Shootdodge abilities, two strong aspects players are already familiar with.', 'http://www.jeuxactu.com/test-max-payne-3-sur-pc-81280.htm', '2012-06-11', 6),
(22, 'LEVEL (Czech Republic)', 90, 'Max Payne is god and it really doesn\'t matter that he is not the fair one. He is the most interesting action character these days and the game itself is one of the best you can get.', '', '2012-07-29', 6),
(23, 'DarkStation', 90, 'While it has a few missteps and lacks the semi tongue in cheek humor of the original games, I found that the experience of Max\'s journey to be far more engrossing than I initially expected', 'https://www.darkstation.com/reviews/max-payne-3-2/', '2012-06-25', 6),
(24, 'USgamer', 100, 'A great PvP game that offers some of the most intriguing and nuanced team combat around.', 'https://www.usgamer.net/articles/dota-2-review', '2013-08-30', 7),
(25, 'Destructoid', 95, 'With zero cost to play and one of the highest skill ceilings of any game I\'ve ever encountered, Dota 2 is a modern multiplayer masterpiece.', 'https://www.destructoid.com/review-dota-2-258506.phtml', '2013-07-24', 7),
(26, 'IGN', 94, 'But once you start to learn its secrets, there’s a wild and exciting variety of play here that’s unmatched, even by its peers. It’s a challenge of knowledge as well as reflexes, and success is a rush.', 'https://www.ign.com/articles/2013/07/24/dota-2-review', '2013-07-24', 7),
(27, 'PC Gamer', 90, 'A deep and rewarding competitive game that becomes something special when taken on in the company of others.', 'https://www.pcgamer.com/dota-2-review-2/', '2013-08-07', 7),
(28, 'Destructoid', 95, 'Heroes has a ton of depth, it\'s very well balanced (though not perfect), and nearly every cast member is a blast to play. It achieves almost everything it sets out to accomplish, so I really hope it catches on with the non-believers and continues to grow.', 'https://www.destructoid.com/review-heroes-of-the-storm-292749.phtml', '2015-06-02', 8),
(29, 'Game Informer', 93, 'With quick and action-packed games, Heroes of the Storm is accessible to new players, but with enough depth that to ensure that you are still learning new ways to use your abilities in different situations and battlegrounds after hundreds of games..', 'https://www.gameinformer.com/games/heroes_of_the_storm/b/pc/archive/2015/06/04/majestic-multiplayer-mayhem.aspx', '2015-06-04', 8),
(30, 'LevelUp', 92, 'Heroes of the Storm successfully brings innovation to a stale genre dominated by 2 giants. Its bare-bones mechanics make it a truly fun game to play, from the beginning of a match to the very end', 'https://www.levelup.com/PC/juegos/48922/Heroes-of-the-Storm/review', '2015-06-11', 8),
(31, 'Softpedia', 90, 'One of the most accessible and most fun multiplayer online battle arena titles out there. Sure, it lacks the complexity of Dota 2 or League of Legends, but the short length of matches (around 20 minutes) and the polish that\'s characteristic of a Blizzard product make it stand out.', 'https://www.softpedia.com/reviews/games/pc/Heroes-of-the-Storm-Review-483232.shtml', '2015-06-03', 8),
(32, 'IGN', 80, 'That’s one of the best things about Fortnite: It always keeps things simple..', 'https://sea.ign.com/fortnite-iphone/132258/review/fortnite-battle-royale-review', '2018-03-27', 9),
(33, 'PC Games', 80, 'Although it has some flaws and typical free-to-play mannerisms, Fortnite is fun, both in co-op and in PvP..', 'http://www.pcgames.de/Fortnite-Spiel-16272/Tests/Rette-die-Welt-Battle-Royale-Early-Access-Review-Nintendo-Switch-Update-1253420/', '2018-10-09', 9),
(34, 'Jeuxvideo.com', 80, 'Whether we\'re talking aesthetics or the accessibility of its gameplay, all is good for Fortnite, which provides a beautiful vision of what Battle Royale should be.', 'http://www.jeuxvideo.com/test/818473/fortnite-le-battle-royale-accessible-et-fun.htm', '2018-06-03', 9),
(35, 'FANDOM', 100, 'PlayerUnknown’s Battlegrounds is one of the most compelling video game experiences to come out in years. That its stood out in a year filled with some of the best games ever is a testament to how brilliant it really is. It’s the sort of game I talk about in excited, quick bursts with friends, the kind I think about when I’m not playing it.', 'http://fandom.wikia.com/articles/playerunknowns-battlegrounds-review', '2017-12-22', 10),
(36, 'IGN', 95, 'PlayerUnknown’s Battlegrounds has taken the military-sim gameplay popularized by games like ARMA and DayZ, boiled it down to its most exciting parts, and streamlined it into quick and accessible rounds of pure, hassle-free, survival-based action.', 'https://sea.ign.com/playerunknowns-battlegrounds/115891/review/playerunknowns-battlegrounds-review', '2018-01-05', 10),
(37, 'Game Informer', 95, 'PlayerUnknown’s Battlegrounds brings the battle royale genre to a smashing mainstream success, packed with memorable moments and action-packed adventures.', 'https://www.gameinformer.com/games/playerunknowns_battlegrounds/b/pc/archive/2017/12/20/looting-shooting-and-staying-alive.aspx', '2018-12-20', 10),
(38, 'AusGamers', 86, 'For me, the game does all the right things. It might not be the return of Rainbow Six: Rogue Spear, and it might have more than a few bugs to iron out before it\'s competition ready, but it\'s exactly what I expected -- competitive SWAT 4 -- and Ubisoft keep saying the right things about their post-release plans.', 'https://www.ausgamers.com/games/rainbow-six-siege/review/', '2015-12-02', 11),
(39, 'Softpedia', 85, 'The system does not feel oppressive, and Ubisoft clearly hopes that most gamers will spend actual currency at some point during their career, but for some fans, its very existence is a problem, given that they already have to pay full price for the core package.', 'https://www.softpedia.com/reviews/games/playstation-4/rainbow-six-siege-review-497371.shtml', '2015-12-08', 11),
(40, 'Guardian', 80, 'Despite retailing as a full-price game, Siege contains microtransactions which can speed up the levelling process and unlock cosmetic items, which on top of the ‘season pass’ (for future DLC) feels more than a little mean. Counter-Strike GO looms large in the background of much of what Siege does, and that game supports a miniature economy of skins and other items – but also built a following for a dozen years over several entries before this.', 'https://www.theguardian.com/technology/2015/dec/21/tom-clancy-rainbow-six-siege-review-multiplayer-microtransactions', '2015-12-21', 11);

-- --------------------------------------------------------

--
-- Table structure for table `favourites`
--

CREATE TABLE `favourites` (
  `FavouriteID` int(11) NOT NULL,
  `AccountID` int(11) NOT NULL,
  `GameID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `favourites`
--

INSERT INTO `favourites` (`FavouriteID`, `AccountID`, `GameID`) VALUES
(4, 1, 3),
(1, 2, 3),
(5, 2, 4),
(2, 2, 10),
(3, 4, 10),
(7, 7, 1),
(8, 7, 2),
(6, 7, 3);

-- --------------------------------------------------------

--
-- Table structure for table `gameinfo`
--

CREATE TABLE `gameinfo` (
  `GameID` int(11) NOT NULL,
  `GameName` varchar(255) CHARACTER SET utf8 NOT NULL,
  `GamePublisher` varchar(255) CHARACTER SET utf8 NOT NULL,
  `GameGenre` varchar(100) CHARACTER SET utf8 NOT NULL,
  `GameDesc` text COLLATE utf8_unicode_ci NOT NULL,
  `GameRelease` date NOT NULL,
  `GamePopularity` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Trailer` varchar(255) CHARACTER SET utf8 NOT NULL,
  `thumb` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `gameinfo`
--

INSERT INTO `gameinfo` (`GameID`, `GameName`, `GamePublisher`, `GameGenre`, `GameDesc`, `GameRelease`, `GamePopularity`, `Trailer`, `thumb`) VALUES
(1, 'Counter Strike: Global Offensive', 'Valve Games', 'First Person', 'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).', '2012-08-22', 'Most Played', 'https://www.youtube.com/embed/edYCtaNueQY', 'images/movie/t-battleofthesexes-v2.jpg'),
(2, 'Grand Theft Auto: V', 'Rockstar Games', 'Third Person', 'Los Santos: a sprawling sun-soaked metropolis full of self-help gurus, starlets and fading celebrities, once the envy of the Western world, now struggling to stay alive in a time of economic uncertainty and cheap reality TV.', '2015-04-14', 'Released Games', 'https://www.youtube.com/embed/hvoD7ehZPcM', 'images/movie/t-coco-v3.jpg'),
(3, 'Overwatch', 'Blizzard Games', 'First Person', 'Overwatch is a highly stylized team-based shooter set on earth in the near future. Every match is an intense multiplayer showdown pitting a diverse cast of soldiers, mercenaries, scientists, adventurers, and oddities against each other in an epic, globe-spanning conflict.', '2016-05-23', 'Most Played', 'https://www.youtube.com/embed/FqnKB22pOC0', 'images/movie/overwatch.jpg'),
(4, 'Call of Duty: WWII', 'Sledghammer Games', 'First Person', 'Call of Duty returns to its roots with Call of Duty: WWII - a breathtaking experience that redefines World War II for a new gaming generation. Land in Normandy on D-Day and battle across Europe through iconic locations in historys most monumental war. Experience classic Call of Duty combat, the bonds of camaraderie, and the unforgiving nature of war against a global power throwing the world into tyranny.', '2017-11-02', 'New Release', 'https://www.youtube.com/embed/a9ITIaKzG3A', 'images/movie/callofduty.jpg'),
(5, 'Life is Strange: 2', 'Square Enix', 'Third Person', 'The long awaited sequel to the award winning Life is Strange returns with a new 5-part narrative adventure from DONTNOD Entertainment', '2018-08-17', 'New Release', 'https://www.youtube.com/embed/2ARsBUnTRoI', 'images/movie/lifeisstrange2.jpg'),
(6, 'Max Payne: 3', 'Rockstar Games', 'Third Person', 'The gritty Max Payne series returns for a third iteration. From automatics to handguns to rifles and explosives, Max wields (and dual-wields) a wide array of high-powered weaponry in both single player and multiplayer. Max Payne 3 provides devastating firepower for any and all situations that call for kinetic and punishing action.', '2012-05-31', 'Released Games', 'https://www.youtube.com/embed/veFgqFj5IH0', 'images/movie/maxpayne3.jpg'),
(7, 'DOTA: 2', 'Valve Games', 'MOBA', 'Dota 2 features the characters and factions from the original Defense of the Ancients title with new features', '2013-07-09', 'Most Played', 'https://www.youtube.com/embed/tMzpLnQtVuE', 'images/movie/dota2.jpg'),
(8, 'Heroes Of The Storm', 'Blizzard Games', 'MOBA', 'This free-to-play online team brawler assembles a diverse cast of characters from Blizzard’s far-flung realms of science fiction and fantasy, including the Warcraft, StarCraft, and Diablo universes, and challenges them to compete in epic, adrenaline-charged battles. Heroes of the Storm solicits players to customize heroes to suit their style and then team up with friends for some all-out mayhem.', '2015-06-02', 'Released Games', 'https://www.youtube.com/embed/0ecv0bT9DEo', 'images/movie/hots.jpg'),
(9, 'Fortnite', 'Epic Games', 'Battle Royale', 'Epic Games next project has you building forts and stopping a zombie invasion', '2017-07-25', 'Released Games', 'https://www.youtube.com/embed/2gUtfBmw86Y', 'images/movie/fortnite.jpg'),
(10, 'PlayerUnknown\'s Battlegrounds', 'Valve Games', 'Battle Royale', 'PLAYERUNKNOWN\'S BATTLEGROUNDS is a last-man-standing shooter being developed with community feedback. Players must fight to locate weapons and supplies in a massive 8x8 km island to be the lone survivor. This is BATTLE ROYALE', '2017-12-20', 'Released Games', 'https://www.youtube.com/embed/cPKNe2d3sY0', 'images/movie/pubg.jpg'),
(11, 'Tom Clancy\'s Rainbow Six Siege', 'Ubisoft', 'First Person', 'Tom Clancy’s Rainbow Six Siege is inspired by real world counter-terrorist organizations, and inserts players in the middle of lethal close-quarters engagements. For the first time in a Tom Clancy’s Rainbow Six game, players can choose from a variety of unique Counter Terrorist Operators and engage in tangible sieges, a new style of assault in which enemies have the means to transform their environments into modern strongholds while Rainbow Six teams lead the assault to breach the enemy’s position.', '2015-12-01', 'Most Played', 'https://www.youtube.com/embed/lG9PuYxh_q0', 'images/movie/r6s.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `userreview`
--

CREATE TABLE `userreview` (
  `UserReviewID` int(11) NOT NULL,
  `UserReviewDesc` text NOT NULL,
  `UserReviewDate` date NOT NULL,
  `UserReviewUpvote` int(11) NOT NULL,
  `AccountID` int(11) NOT NULL,
  `GameID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=armscii8;

--
-- Dumping data for table `userreview`
--

INSERT INTO `userreview` (`UserReviewID`, `UserReviewDesc`, `UserReviewDate`, `UserReviewUpvote`, `AccountID`, `GameID`) VALUES
(1, 'This might be perhaps, one of the best games of the entire GTA series that Rockstar has ever produced. I\'d certainly recommend my friends to play this game! Totally love the storyline, graphics, vehicles, lighting, and the multiplayer is what makes is so much fun!', '2018-08-12', 0, 1, 2),
(2, 'GTA IV had very difficult steering but this game was a major improvement!', '2019-01-16', 9, 3, 2),
(3, 'Who here is still reading this from 2017 please upvote! OwO', '2019-01-09', -5, 4, 2),
(4, 'It seems that the recent updates and the community has made this game unbelievably hard to play. I used to enjoy this game a lot but now, I guess that it is time to look for another game. I\'d strongly advise newer players to try out other games rather than this', '2019-02-08', 1, 1, 1),
(5, 'Hehe acksdee I luv dis game OwO', '2013-01-12', -3, 4, 1),
(6, 'Overwatch is a game for weebs. DON\'T PLAY IT PWEASE UWU', '2016-06-22', 0, 4, 3),
(7, 'This game is rather fast-paced and it might be fun for some. However, I think that older players might find it hard to get used to it, especially for those hailing from CSGO and such tactical games', '2016-06-22', 0, 2, 3),
(8, 'This game brings back a lot of historical moments during WW2 and I like it despite some inaccuracies. Nevertheless, this is a game that I recommend others trying it out!', '2018-01-10', 0, 2, 4),
(9, 'This is my go-to game and I must say, it is really addictive playing this game!', '2018-06-15', 0, 5, 4),
(10, 'This game is a classic with all the slow-mo sequences and the guns. I really love this game and I play this whenever I feel bored. Would really recommend this for anyone looking to kill time!', '2015-04-01', 0, 1, 6),
(11, 'League is a much better game! OwO I luv munchies', '2016-05-12', 0, 4, 7),
(12, 'This game involves a lot of thinking and a lot of strategies. However, after a while when one gets used to it, the game will feel boring. Nevertheless, I appreciate the efforts from the dev team in adding new characters to the game in order to make it into a much more fun and challenging experience.', '2017-10-18', 0, 2, 7),
(13, 'The game is somewhat a mix of overwatch and dota and it can be pretty confusing to play at first. Nonetheless, it is so fun once you get the hang of it!', '2017-10-18', 0, 5, 8),
(15, 'Would certainly recommend this to my friends!', '2018-01-16', 0, 3, 8),
(16, 'Hehe acksdee pubg players are noob af y aren\'t they playing dis game of the century OwO skrubs ew', '2018-10-21', 0, 4, 9),
(17, 'This game is absolutely terrible not just of the news that has made it in a bad plight, but also the community and players are so toxic that it literally puts off others from playing this game.', '2018-10-21', 0, 2, 9),
(18, 'This game is riddled with hackers and thus, I find it very hard to literally unplayable when it comes to playing a match in this game.', '2017-12-23', 0, 5, 10),
(19, 'The gameplay is great and all and the community is great. However, I felt that I didn\'t get what I paid for due to the hackers that frequently ruin the game here.', '2017-12-30', 0, 3, 10),
(20, 'UwU y\'all noobs y play this game, ONLY I CAN WIN BY HAX!', '2018-03-23', 0, 4, 10),
(21, 'This is indeed, the best of the best games that I have ever played so far. The community might be toxic but the gameplay of this is so fun that I absolutely got addicted to it! I really recommend others to play with friends as the experience would be so much fun!', '2018-11-25', 0, 1, 11),
(22, 'Hax hax hax I only know how to hax OwO play csgo is a better choice, kys plox', '2018-10-24', 0, 3, 11),
(23, 'Originally when I first started this game in in 2015, it was rather a saddening experience as finding matches took very long due to the lack of players back then. The graphics back then were poor and the lighting was horrid. However, when I started this game again, I realised that it has come a long way since its launch and it has been constantly updated ever since, thus giving a completely different feel and certainly, a much better one!', '2018-09-20', 0, 5, 11),
(24, 'I take it back, it isn\'t such a nice game after all', '2018-12-24', 0, 1, 10),
(25, 'I certainly love this game a lot! This was a big, major improvement from GTA IV!', '2019-01-13', 0, 4, 1),
(29, 'goodgame', '2019-02-07', 0, 1, 2),
(30, 'repid sker', '2019-02-07', 1, 1, 2),
(32, 'Gm is bsc n has lttl to no intrsting aspcts to it. Gam is sht n i dnt rcmmnd it to any1. Huge dtst n dspptmt. Ngtv Revuw -_-', '2019-02-02', 0, 4, 1),
(33, 'siao', '2019-02-08', 0, 1, 1),
(39, 'not again', '2019-02-08', 0, 7, 1),
(41, 'urmomgay', '2019-02-08', 0, 11, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`AccountID`),
  ADD UNIQUE KEY `account_username` (`Username`);

--
-- Indexes for table `criticreview`
--
ALTER TABLE `criticreview`
  ADD PRIMARY KEY (`CriticID`),
  ADD KEY `GameId1` (`GameId1`);

--
-- Indexes for table `favourites`
--
ALTER TABLE `favourites`
  ADD PRIMARY KEY (`FavouriteID`),
  ADD UNIQUE KEY `AccountID` (`AccountID`,`GameID`),
  ADD KEY `Game` (`GameID`);

--
-- Indexes for table `gameinfo`
--
ALTER TABLE `gameinfo`
  ADD PRIMARY KEY (`GameID`);

--
-- Indexes for table `userreview`
--
ALTER TABLE `userreview`
  ADD PRIMARY KEY (`UserReviewID`),
  ADD KEY `GameID` (`GameID`),
  ADD KEY `AccountId` (`AccountID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `AccountID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `criticreview`
--
ALTER TABLE `criticreview`
  MODIFY `CriticID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT for table `favourites`
--
ALTER TABLE `favourites`
  MODIFY `FavouriteID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `gameinfo`
--
ALTER TABLE `gameinfo`
  MODIFY `GameID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `userreview`
--
ALTER TABLE `userreview`
  MODIFY `UserReviewID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `criticreview`
--
ALTER TABLE `criticreview`
  ADD CONSTRAINT `GameId1` FOREIGN KEY (`GameId1`) REFERENCES `gameinfo` (`GameID`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `favourites`
--
ALTER TABLE `favourites`
  ADD CONSTRAINT `Account` FOREIGN KEY (`AccountID`) REFERENCES `account` (`AccountID`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `Game` FOREIGN KEY (`GameID`) REFERENCES `gameinfo` (`GameID`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `userreview`
--
ALTER TABLE `userreview`
  ADD CONSTRAINT `AccountId` FOREIGN KEY (`AccountID`) REFERENCES `account` (`AccountID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `GameID` FOREIGN KEY (`GameID`) REFERENCES `gameinfo` (`GameID`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
