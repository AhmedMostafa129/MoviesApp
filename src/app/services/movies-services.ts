import { Injectable } from '@angular/core';
import { Movies } from '../modals/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesServices {
  movie: Movies[];

  constructor() {
    this.movie = [
      {
        id: 1, name: "John-Wick", rate: 8, availablelty: "available", categoryId: 1, image: "2.jpg", trailerId: "2AUmvWm5ZDQ",
        description: "A retired hitman is forced back into the underground world of assassins.",
        story: "Legendary assassin John Wick retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks a bloody vengeance.",
        cast: [{ actor: "Keanu Reeves", role: "John Wick" }, { actor: "Michael Nyqvist", role: "Viggo Tarasov" }, { actor: "Alfie Allen", role: "Iosef Tarasov" }, { actor: "Willem Dafoe", role: "Marcus" }]
      },
      {
        id: 2, name: "Jocker", rate: 8, availablelty: "available", categoryId: 4, image: "22.jpg", trailerId: "zAGVQLHvwOY",
        description: "A gritty character study of a mentally troubled comedian.",
        story: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
        cast: [{ actor: "Joaquin Phoenix", role: "Arthur Fleck" }, { actor: "Robert De Niro", role: "Penny Fleck" }, { actor: "Zazie Beetz", role: "Sophie Dumond" }]
      },
      {
        id: 3, name: "Fast & Furious", rate: 8.5, availablelty: "available", categoryId: 1, image: "11.webp", trailerId: "2TAOizOnNPo",
        description: "Street racing, heists, and family.",
        story: "Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom while in the sights of a powerful Brazilian drug lord and a dangerous federal agent.",
        cast: [{ actor: "Vin Diesel", role: "Dominic Toretto" }, { actor: "Paul Walker", role: "Brian O'Conner" }, { actor: "Michelle Rodriguez", role: "Letty Ortiz" }]
      },
      {
        id: 4, name: "Land Of Bad", rate: 9, availablelty: "available", categoryId: 1, image: "111.jpg", trailerId: "yTFazxfrXVw",
        description: "A high-stakes rescue mission turns into a battle for survival.",
        story: "A covert Special Forces operation in the South Philippines spirals into a brutal 48-hour battle for survival. When an elite extraction team is ambushed deep in enemy territory, rookie officer Kinney is left outnumbered but determined to leave no man behind. With an air strike closing in, Kinney's only hope hinges on the guidance of Air Force drone pilot Reaper.",
        cast: [{ actor: "Liam Hemsworth", role: "Kinney" }, { actor: "Russell Crowe", role: "Reaper" }, { actor: "Luke Hemsworth", role: "Abell" }]
      },
      {
        id: 5, name: "Expendables 2", rate: 9.5, availablelty: "available", categoryId: 1, image: "1111.jpg", trailerId: "4xD0junWlFc",
        description: "The old school mercenaries are back for revenge.",
        story: "Mr. Church reunites the Expendables for what should be an easy paycheck, but when one of their men is murdered on the job, their quest for revenge puts them deep in enemy territory and up against an unexpected threat.",
        cast: [{ actor: "Sylvester Stallone", role: "Barney Ross" }, { actor: "Jason Statham", role: "Lee Christmas" }, { actor: "Jet Li", role: "Yin Yang" }]
      },
      {
        id: 6, name: "MAMA", rate: 8, availablelty: "available", categoryId: 4, image: "8.jpg", trailerId: "7Am7i7uM9r0",
        description: "A mother's love knows no bounds, even in death.",
        story: "Two young girls are found in a cabin in the woods, where they had lived for five years. But as they begin a new life, they find that someone or something still wants to come tuck them in at night.",
        cast: [{ actor: "Jessica Chastain", role: "Annabel" }, { actor: "Nikolaj Coster-Waldau", role: "Lucas" }]
      },
      {
        id: 7, name: "قلب أمـــه", rate: 8, availablelty: "available", categoryId: 2, image: "6.jpg", trailerId: "P06R7RwOsT4",
        description: "كوميديا مصرية عن زعيم عصابة بقلب أم.",
        story: "مجرم خطير يتعرض لحادث ويُنقل له قلب أم كانت تحتضر، لتبدأ شخصيته في التغير وتظهر عليه مشاعر الأمومة والحنان في مواقف كوميدية ومفارقات غريبة مع ابنه وصديقه.",
        cast: [{ actor: "شيكو", role: "مجدي تختوخ" }, { actor: "هشام ماجد", role: "يونس" }]
      },
      {
        id: 8, name: "مربع برمودة", rate: 8, availablelty: "available", categoryId: 2, image: "7.webp", trailerId: "QOu73i6W0dU",
        description: "مغامرة كوميدية مليئة بالغموض والمفارقات.",
        story: "تدور الأحداث في إطار كوميدي تشويقي مليء بالمغامرات، حيث يتعرض أبطال العمل لمواقف غريبة وصادمة وتتوالى الأحداث بطريقة مسلية.",
        cast: [{ actor: "مصطفى خاطر", role: "الشخصية الرئيسية" }, { actor: "عمرو عبد الجليل", role: "حبشي" }]
      },
      {
        id: 9, name: "المصيــر", rate: 8, availablelty: "available", categoryId: 3, image: "3.jpeg", trailerId: "LdGS222Hmyo",
        description: "ملحمة تاريخية عن الفيلسوف ابن رشد.",
        story: "تدور أحداث الفيلم في الأندلس في القرن الثاني عشر حول الفيلسوف ابن رشد والصراع بين الفكر المستنير والتطرف الديني، وكيف حاولت السلطة استغلال الدين للحفاظ على مكاسبها.",
        cast: [{ actor: "نور الشريف", role: "ابن رشد" }, { actor: "ليلى علوي", role: "الغجرية" }, { actor: "محمد منير", role: "المغني" }]
      },
      {
        id: 10, name: "Cargo", rate: 8, availablelty: "available", categoryId: 3, image: "5.jpg", trailerId: "W5QLL7gM9W0",
        description: "A father's desperate journey to save his infant daughter in a zombie apocalypse.",
        story: "Stranded in rural Australia in the aftermath of a violent pandemic, an infected father desperately searches for a new home for his infant child, and a means to protect her from his own changing nature.",
        cast: [{ actor: "Martin Freeman", role: "Andy" }, { actor: "Simone Landers", role: "Thoomi" }]
      },
      {
        id: 11, name: "harry", rate: 7, availablelty: "available", categoryId: 5, image: "harry.webp", trailerId: "VyHV0BRtdxo",
        description: "The boy who lived and his journey into magic.",
        story: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        cast: [{ actor: "Daniel Radcliffe", role: "Harry Potter" }, { actor: "Rupert Grint", role: "Ron Weasley" }, { actor: "Emma Watson", role: "Hermione Granger" }]
      },
      {
        id: 13, name: "Top Gun", rate: 8.9, availablelty: "available", categoryId: 1, image: "action.jpg", trailerId: "giXco2jaZ_4",
        description: "Hotshot fighter pilots competing to be the best.",
        story: "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
        cast: [{ actor: "Tom Cruise", role: "Maverick" }, { actor: "Val Kilmer", role: "Iceman" }]
      },
      {
        id: 12, name: "بيت الروبي", rate: 9.1, availablelty: "available", categoryId: 2, image: "com.png", trailerId: "06usNslBSI8",
        description: "كوميديا اجتماعية عن تأثير السوشيال ميديا.",
        story: "يعيش إبراهيم الروبي وزوجته في منطقة ساحلية بعيدا عن ضوضاء القاهرة، لكن العودة المفاجئة تقلب حياتهم رأساً على عقب بسبب انتشار فيديو على مواقع التواصل الاجتماعي.",
        cast: [{ actor: "كريم عبد العزيز", role: "إبراهيم الروبي" }, { actor: "كريم محمود عبد العزيز", role: "إيهاب الروبي" }]
      },
      {
        id: 14, name: "فيها ايه يعني", rate: 8.7, availablelty: "available", categoryId: 2, image: "comedy2.webp", trailerId: "ZR1hC5iNT_w",
        description: "كوميديا رومانسية خفيفة.",
        story: "تدور الأحداث في إطار اجتماعي كوميدي حول المشاكل الزوجية والعلاقات الأسرية وكيفية التعامل معها في الزمن الحالي.",
        cast: [{ actor: "ماجد الكدواني", role: "الزوج" }, { actor: "غادة عادل", role: "الزوجة" }]
      },
      {
        id: 15, name: "MoonLight", rate: 7.9, availablelty: "available", categoryId: 3, image: "Drama.webp", trailerId: "9NJj12tJzqc",
        description: "A timeless story of human connection and self-discovery.",
        story: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
        cast: [{ actor: "Mahershala Ali", role: "Juan" }, { actor: "Trevante Rhodes", role: "Chiron" }]
      },
      {
        id: 16, name: "19 ب ", rate: 8.9, availablelty: "available", categoryId: 3, image: "drama2.jpg", trailerId: "T_7b31v3-kM",
        description: "دراما إنسانية عن الوحدة والخوف.",
        story: "حارس عجوز يعيش في فيلا مهجورة يراقب من خلالها العالم الخارجي، حتى يقتحم حياته شاب يحاول فرض سيطرته عليه.",
        cast: [{ actor: "سيد رجب", role: "الحارس" }, { actor: "ناهد السباعي", role: "الابنة" }]
      },
      {
        id: 17, name: "Annabelle", rate: 5.9, availablelty: "available", categoryId: 4, image: "horro.webp", trailerId: "kisPhy7Y__k",
        description: "The doll that unleashed evil.",
        story: "A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists.",
        cast: [{ actor: "Annabelle Wallis", role: "Mia Form" }, { actor: "Ward Horton", role: "John Form" }]
      },
      {
        id: 18, name: "Scream", rate: 9.6, availablelty: "available", categoryId: 4, image: "horror.jpg", trailerId: "beToTQIjVmA",
        description: "A new decade, new rules.",
        story: "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends using horror films as part of a deadly game.",
        cast: [{ actor: "Neve Campbell", role: "Sidney Prescott" }, { actor: "Courteney Cox", role: "Gale Weathers" }]
      },
      {
        id: 19, name: "Arrival", rate: 8.2, availablelty: "available", categoryId: 5, image: "sci-f.webp", trailerId: "tFMo3UJ4B4g",
        description: "First contact with an alien species.",
        story: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
        cast: [{ actor: "Amy Adams", role: "Louise Banks" }, { actor: "Jeremy Renner", role: "Ian Donnelly" }]
      },
      {
        id: 20, name: "Aliens", rate: 9.3, availablelty: "available", categoryId: 5, image: "sci-f2.webp", trailerId: "vn9mMeWcgoM",
        description: "This time it's war.",
        story: "Ellen Ripley is rescued by a deep salvage team after being in hypersleep for 57 years. The moon that the Nostromo visited has been colonized, but contact is lost.",
        cast: [{ actor: "Sigourney Weaver", role: "Ellen Ripley" }, { actor: "Michael Biehn", role: "Dwayne Hicks" }]
      },
      {
        id: 21, name: "TimeLess", rate: 8.4, availablelty: "available", categoryId: 5, image: "sci-2.jpg", trailerId: "yYh2c_mE3_Q",
        description: "Protect the past to save the future.",
        story: "A mysterious criminal steals a secret state-of-the-art time machine, intent on destroying America as we know it by changing the past.",
        cast: [{ actor: "Abigail Spencer", role: "Lucy Preston" }, { actor: "Matt Lanter", role: "Wyatt Logan" }]
      },
      {
        id: 22, name: "Cave", rate: 8.4, availablelty: "available", categoryId: 5, image: "sci.jpg", trailerId: "P_3P7T7o9uE",
        description: "Terror lies beneath the surface.",
        story: "A group of friends explore a remote cave system in Northern Australia when a tropical storm hits. As rising flood waters trap them deep below the surface, something else emerges.",
        cast: [{ actor: "Jessica McNamee", role: "Jennifer" }, { actor: "Luke Mitchell", role: "Eric" }]
      },
    ];
  }

  getAllmovies(): Movies[] {
    return this.movie;
  }

  getMovieById(id: number): Movies | undefined {
    return this.movie.find(movie => movie.id === id);
  }

  getRecommendedMovies(categoryId: number, excludeMovieId: number): Movies[] {
    return this.movie.filter(m => m.categoryId === categoryId && m.id !== excludeMovieId);
  }
}
