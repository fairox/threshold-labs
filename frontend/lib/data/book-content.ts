export interface BookPage {
    id: string;
    type: 'cover' | 'chapter-title' | 'text' | 'image' | 'index' | 'toc' | 'opener' | 'technical' | 'typographic' | 'divider';
    title?: string;
    content?: string; // Markdown or plain text
    image?: string;
    images?: string[]; // For technical grid
    chapterNumber?: number;
    caption?: string;
}

export const LITEMA_BOOK_CONTENT: BookPage[] = [
    {
        id: "cover",
        type: "cover",
        title: "LITEMA",
        content: "The Living Art of the Basotho\n\nBy Mokhethi Rampeta",
        image: "/litema-book/litema-cover.png"
    },
    {
        id: "foreword",
        type: "text",
        title: "Foreword",
        content: `In the rolling highlands of Lesotho and the vast plains of the Free State, where the earth meets the sky in an endless dance of color and form, there exists an art form that speaks in the language of geometry and dreams in the palette of the earth itself. Litema, the traditional mural art of the Basotho people, represents far more than mere decoration—it is a living testament to the enduring power of women's creativity, the deep connection between human beings and their environment, and the remarkable ability of cultural traditions to adapt and survive across centuries of change.

This book emerges from a profound respect for the Basotho communities who have maintained this extraordinary tradition through generations of challenge and transformation. It is not merely an academic exercise or an aesthetic appreciation, but rather an attempt to honor the knowledge, skill, and cultural wisdom of the women who have kept Litema alive through their hands, their hearts, and their unwavering commitment to beauty in the midst of daily life.

The geometric patterns that grace the walls of Basotho homes are prayers made visible, stories told in earth and ochre, and connections to ancestors that transcend the boundaries between the physical and spiritual worlds. Each line carved into wet clay, each color applied with careful intention, represents a continuation of knowledge that stretches back through centuries, linking contemporary practitioners to their foremothers in an unbroken chain of artistic and cultural transmission.`
    },
    {
        id: "foreword-2",
        type: "text",
        title: "Foreword (cont.)",
        content: `As we face an era of rapid globalization and cultural homogenization, the preservation and celebration of traditions like Litema becomes not just important but essential. These art forms remind us of the diversity of human expression, the beauty that emerges from deep cultural roots, and the wisdom that can be found in practices that have sustained communities across generations. They challenge us to look beyond the dominant narratives of art history and to recognize the sophisticated aesthetic and symbolic systems that have flourished in every corner of our world.

This book invites you on a journey through the world of Litema—from its ancient origins to its contemporary revival, from the intimate process of creation to the broader cultural meanings that give it life. It is a journey that requires us to slow down, to look carefully, and to listen respectfully to voices that have too often been marginalized in discussions of art and culture. It asks us to appreciate not just the visual beauty of these geometric patterns, but the complex social, spiritual, and environmental relationships that they represent.

The women who create Litema are not just artists in the Western sense of the term—they are cultural bearers, spiritual practitioners, community builders, and keepers of ancient wisdom. Their work connects the domestic sphere to the cosmic order, the individual home to the broader landscape, and the present moment to the eternal cycles of seasons, generations, and spiritual renewal. Through their hands, mud and dung become vehicles for beauty, meaning, and cultural continuity.`
    },
    {
        id: "foreword-3",
        type: "text",
        title: "Foreword (cont.)",
        content: `In presenting this work to an international audience, we are acutely aware of the responsibilities that come with cultural translation and representation. This book has been created in partnership with Basotho communities, with their guidance, approval, and ongoing involvement. It seeks to honor their ownership of this cultural knowledge while sharing its beauty and significance with a broader world that has much to learn from the wisdom embedded in these ancient practices.

May this book serve not only as a celebration of Litema's extraordinary beauty but as a bridge between cultures, a source of inspiration for artists and cultural workers everywhere, and a contribution to the vital work of preserving and honoring the world's diverse cultural heritage. Most importantly, may it serve the Basotho communities themselves as a record of their remarkable artistic legacy and a tool for ensuring that this living tradition continues to flourish for generations to come.`
    },
    // CHAPTER 1
    {
        id: "ch1-cover",
        type: "opener",
        chapterNumber: 1,
        title: "The Language of Earth",
        content: "In the early morning light of the Maloti Mountains...",
        image: "/litema-book/ch1-panorama.png"
    },
    {
        id: "ch1-p1",
        type: "text",
        title: "The Language of Earth",
        content: `In the early morning light of the Maloti Mountains, as mist rises from the valleys and the first rays of sun touch the peaks that give Lesotho its name as the "Kingdom in the Sky," something extraordinary becomes visible across the landscape. Scattered throughout the villages that dot these highlands, the walls of traditional homes come alive with intricate geometric patterns that seem to pulse with their own inner rhythm. These are not mere decorations, but expressions of a sophisticated artistic tradition that has transformed the humble materials of earth and dung into vehicles for beauty, meaning, and cultural continuity.

This is Litema—pronounced "di-te-ma" in the musical cadences of Sesotho—an art form that embodies the profound connection between the Basotho people and their environment, between women and their creative power, and between the practical necessities of daily life and the human need for beauty and meaning. To understand Litema is to enter into a world where art and life are inseparable, where the walls of a home become canvases for expressing everything from agricultural cycles to spiritual beliefs, from personal identity to community belonging.`,
        image: "/litema-book/ch1-panorama.png"
    },
    {
        id: "ch1-p2",
        type: "text",
        title: "Cultivation",
        content: `The word itself carries layers of meaning that reveal the deep cultural significance of this practice. Derived from the verb "ho lema," meaning "to cultivate" or "to plough," Litema connects the act of artistic creation directly to the fundamental activity that sustains life in these agricultural communities. Just as the earth is cultivated to produce crops that nourish the body, the walls of homes are cultivated with patterns that nourish the spirit and strengthen the bonds that hold communities together.

This connection between cultivation and creation is not merely metaphorical but reflects a profound understanding of the relationship between human beings and their environment. The same hands that work the fields, that plant and tend and harvest, are the hands that mix the clay and dung, that carve the patterns and apply the colors that transform a simple mud wall into a work of art. The same seasonal rhythms that govern agricultural life also govern the creation of Litema, with new patterns often applied during times of celebration, renewal, and community gathering.`
    },
    {
        id: "ch1-p3",
        type: "text",
        title: "A Women's Art",
        content: `The creation of Litema is fundamentally a women's art, though this designation carries none of the diminishment that such categorization might imply in other contexts. In Basotho culture, women's roles as creators and nurturers extend far beyond the domestic sphere to encompass responsibilities for cultural transmission, spiritual practice, and community cohesion. The women who create Litema are recognized as artists, cultural bearers, and spiritual practitioners whose work connects the individual household to the broader cosmos.

This gendered aspect of Litema reflects deeper cultural understandings about the relationship between women and the earth, between feminine creativity and the cycles of fertility and renewal that govern both agricultural and human life. The patterns that women create on their walls are often understood as prayers for fertility, abundance, and protection—appeals to ancestors and spiritual forces that are believed to influence the well-being of families and communities.`,
        image: "/litema-book/generic-placeholder.png"
    },
    {
        id: "ch1-p4",
        type: "text",
        title: "Materials",
        content: `The materials used in Litema creation speak to this intimate connection with the earth and its cycles. The base layer consists of mud mixed with cow dung, a combination that might seem humble to outside observers but represents sophisticated knowledge about building techniques and material properties. The dung serves not merely as a binder but as a source of strength and durability, its high ammonia content acting as a natural antiseptic that helps preserve the mud surface and creates a foundation that can last for months or even years with proper care.

Over this foundation, the geometric patterns are created through a variety of techniques that demonstrate remarkable technical skill and artistic sophistication. Some patterns are carved or incised into the wet surface using fingers, sticks, or specially crafted tools, creating textural variations that catch and play with light throughout the day. Others are created through the application of different colored clays and ochres, building up layers of meaning through color symbolism that connects to spiritual beliefs and cultural values.`,
        image: "/litema-book/ch1-panorama.png"
    },
    {
        id: "ch1-p5",
        type: "text",
        title: "Color & Meaning",
        content: `The colors themselves carry profound significance within Basotho culture. Red ochre, known as "letsoku," is understood as the "blood of the earth" and is associated with fertility, menstruation, and the life force that flows through all living things. White clay represents purity, calm, and the enlightenment that comes from connection with ancestors. Black, often created through the use of charcoal or specific clays, symbolizes the dark rain clouds that bring life-giving water and represents the power of ancestors to influence the natural world.

These colors are not applied randomly but according to sophisticated systems of meaning that vary between regions, families, and individual artists. The same pattern might carry different meanings depending on its color, its placement on the wall, and its relationship to other patterns in the overall composition. This complexity reflects the depth of cultural knowledge required to create and interpret Litema, knowledge that is passed down through generations of women who serve as both artists and cultural teachers.`
    },
    {
        id: "ch1-p6",
        type: "text",
        title: "Geometry",
        content: `The geometric nature of Litema patterns reflects not only aesthetic preferences but also deeper cultural understandings about the structure of reality itself. The repetitive, symmetrical designs that characterize most Litema work are understood to mirror the patterns that govern natural phenomena—the regular cycles of seasons, the mathematical relationships that underlie plant growth, the geometric structures that can be observed in everything from spider webs to crystal formations.

This geometric sensibility connects Basotho artistic traditions to broader African aesthetic systems that emphasize pattern, rhythm, and mathematical relationships as fundamental principles of beauty and meaning. The patterns are not merely decorative but are understood to participate in the cosmic order, to create harmony between human habitation and natural forces, and to establish connections between the visible world and invisible spiritual realities.`,
        image: "/litema-book/ch3-geometry.png"
    },
    // CHAPTER 2
    {
        id: "ch2-cover",
        type: "divider",
        chapterNumber: 2,
        title: "Roots in the Earth",
        content: "The story of Litema stretches back through centuries of Basotho history, its roots extending deep into the cultural soil.",
    },
    {
        id: "ch2-p1",
        type: "text",
        title: "Roots in the Earth",
        content: `The story of Litema stretches back through centuries of Basotho history, its roots extending deep into the cultural soil of Southern Africa long before the first European observers arrived to document what they saw. Like the geometric patterns themselves, this history unfolds in layers, each period adding new elements while preserving essential characteristics that connect contemporary practitioners to their ancestors in an unbroken chain of artistic and cultural transmission.

To trace the origins of Litema is to embark on a journey through the complex history of the Basotho people themselves—a journey that encompasses migration and settlement, conflict and adaptation, cultural preservation and innovation. It is a story that reveals how art forms can serve as repositories of cultural memory, preserving knowledge and values across generations of change while adapting to new circumstances and influences.`,
        image: "/litema-book/ch2-history.png"
    },
    {
        id: "ch2-p2",
        type: "text",
        title: "Ancient Roots",
        content: `The earliest roots of Litema can be traced to the broader traditions of mural art that have flourished across Southern and Eastern Africa for millennia. Archaeological evidence suggests that the practice of decorating walls with geometric patterns has ancient origins in this region, with examples found in rock shelters and archaeological sites that date back hundreds and possibly thousands of years. These early examples share many characteristics with contemporary Litema—the use of earth-based pigments, the emphasis on geometric patterns, and the integration of artistic practice with daily life and spiritual beliefs.

The specific traditions that would eventually become known as Litema likely developed as part of the broader cultural complex associated with Sotho-Tswana speaking peoples who settled in the region that is now Lesotho and the Free State province of South Africa. These communities brought with them sophisticated knowledge of agriculture, metallurgy, and artistic production, including traditions of pottery decoration, textile production, and architectural ornamentation that would provide the foundation for later developments in mural art.`,
        image: "/litema-book/ch2-history.png"
    },
    // CHAPTER 3
    {
        id: "ch3-cover",
        type: "typographic",
        chapterNumber: 3,
        title: "Sacred Geometry",
        content: "- Marabaraba\n- Litema\n- Khomo\n- Pelo\n- Hlolo\n- Nala\n- Pula",
    },
    {
        id: "ch3-p1",
        type: "text",
        title: "Sacred Geometry",
        content: `In the intricate geometric patterns that flow across the walls of Basotho homes lies a sophisticated language of meaning that speaks to the deepest aspects of human experience—our relationship with the natural world, our connections to spiritual forces, and our understanding of the mathematical principles that govern the universe itself. To learn to read this language is to enter into a realm where art and mathematics, spirituality and daily life, individual expression and collective wisdom converge in patterns of extraordinary beauty and profound significance.

The geometric nature of Litema is not accidental but reflects fundamental Basotho understandings about the structure of reality and the principles that govern both natural phenomena and human society. The repetitive, symmetrical patterns that characterize most Litema work are understood to mirror the mathematical relationships that can be observed throughout the natural world—from the spiral arrangements of seeds in a sunflower to the hexagonal structures of honeycomb, from the branching patterns of rivers to the crystalline formations of minerals.`,
        image: "/litema-book/ch3-geometry.png"
    },
    {
        id: "ch3-p2",
        type: "text",
        title: "Symbolism",
        content: `The symbolic meanings embedded in Litema patterns operate on multiple levels simultaneously, creating layers of significance that can be read and interpreted according to different contexts and purposes. At the most basic level, many patterns derive their meanings from direct visual resemblance to objects, phenomena, or activities from daily life. The zigzag lines that appear in many designs, for example, are often understood to represent water flowing over rocks, the furrows of ploughed fields, or the lightning that accompanies thunderstorms.

The "morabaraba" pattern, named after a traditional board game, represents one of the most widespread and recognizable designs in the Litema repertoire. This pattern, consisting of intersecting lines that create a grid-like structure, carries multiple layers of meaning that extend far beyond its gaming associations. At one level, it represents the ordered structure of agricultural fields and the careful planning required for successful farming. At another level, it symbolizes the social networks and reciprocal relationships that bind communities together. At the deepest level, it represents the cosmic order itself—the invisible grid of relationships and forces that governs all existence.`
    },
    // CHAPTER 4
    {
        id: "ch4-cover",
        type: "technical",
        chapterNumber: 4,
        title: "Hands That Create",
        content: "Process Analysis: Mixing clay and dung to the perfect consistency requires years of tactile experience.",
        images: ["/litema-book/ch1-panorama.png", "/litema-book/ch3-geometry.png", "/litema-book/ch5-contemporary.png", "/litema-book/ch2-history.png"]
    },
    {
        id: "ch4-p1",
        type: "text",
        title: "The Process",
        content: `In the quiet hours of early morning, when the mountain air is crisp and the light falls soft across the valleys of Lesotho, 'Matsooana Sekokotoana rises to begin her day's work. Her hands, weathered by decades of labor in fields and homes, move with practiced certainty as she gathers the materials she will need—clay from the riverbank, dung from the cattle kraal, water from the spring, and the precious ochre that will bring color to her creation.

'Matsooana is one of the master practitioners who keep the tradition of Litema alive in contemporary Basotho society. Her knowledge spans not only the technical skills required to create the intricate geometric patterns but also the cultural wisdom that gives them meaning and the spiritual understanding that makes them effective as forms of communication with ancestors and community. In her hands, the ancient tradition finds new expression while maintaining its essential character and significance.`,
        image: "/litema-book/generic-placeholder.png"
    },
    // CHAPTER 5
    {
        id: "ch5-cover",
        type: "chapter-title",
        chapterNumber: 5,
        title: "Living Tradition",
        content: "Litema is finding new life in digital galleries...",
    },
    {
        id: "ch5-p1",
        type: "text",
        title: "Modern Revival",
        content: `In the digital galleries of social media platforms, in the studios of contemporary artists, in the classrooms of universities, and in the cultural centers of cities far from the mountains of Lesotho, the geometric patterns of Litema are finding new life and new meaning. This is not the story of a tradition preserved in amber, frozen in time as a relic of the past, but rather the vibrant narrative of a living cultural practice that continues to evolve, adapt, and inspire new generations of artists and cultural workers around the world.

The contemporary revival of Litema represents one of the most remarkable cultural phenomena of recent decades—a grassroots movement that has emerged from within Basotho communities while attracting international attention and support. This revival is not simply about preserving old practices but about demonstrating the continued relevance and vitality of traditional knowledge in addressing contemporary challenges and opportunities.`,
        image: "/litema-book/ch5-contemporary.png"
    },
    {
        id: "ch5-p2",
        type: "text",
        title: "Digital & Contemporary",
        content: `The work of contemporary artists like Baba Tjeko exemplifies the creative potential of this revival movement. Born Thabo Tjeko, this South African multi-disciplinary visual artist has dedicated his career to preserving and reinterpreting Basotho cultural traditions through contemporary artistic media. His colorful graphic illustrations translate the geometric vocabulary of traditional Litema into digital formats that can reach global audiences while maintaining the essential characteristics and cultural significance of the original art form.

Baba Tjeko's approach to Litema revival demonstrates the possibilities for creative adaptation that respect traditional knowledge while exploring new forms of expression. His work preserves the geometric precision, symbolic content, and aesthetic sensibilities of traditional Litema while adapting them for contemporary contexts and audiences. Through his illustrations, traditional patterns find new life in books, magazines, digital platforms, and gallery exhibitions that introduce Litema to viewers who might never have the opportunity to visit a traditional Basotho village.`
    },
    // CHAPTER 6
    {
        id: "ch6-cover",
        type: "chapter-title",
        chapterNumber: 6,
        title: "Future Patterns",
        content: "Unprecedented opportunity and challenge.",
    },
    {
        id: "ch6-p1",
        type: "text",
        title: "Future Patterns",
        content: `As the sun sets over the Maloti Mountains, casting long shadows across the valleys where Litema has flourished for centuries, we find ourselves at a moment of both unprecedented opportunity and significant challenge for this remarkable artistic tradition. The geometric patterns that have adorned Basotho homes for generations now face a future that will be shaped by forces both familiar and entirely new—technological innovation and cultural preservation, global connectivity and local identity, economic development and environmental sustainability.

The challenges facing Litema in the twenty-first century are complex and interconnected, reflecting broader patterns of social, economic, and environmental change that affect traditional communities around the world. Urbanization continues to draw young people away from rural areas where traditional knowledge is most readily available and where the materials and contexts for traditional practice are most accessible.`,
        image: "/litema-book/ch1-panorama.png"
    },
    {
        id: "epilogue",
        type: "text",
        title: "Epilogue",
        content: `As our journey through the world of Litema draws to a close, we find ourselves changed by the encounter with this remarkable tradition. We have traveled from the ancient origins of geometric wall decoration in Southern Africa to the contemporary revival that is bringing Litema to global audiences. We have explored the intricate symbolic meanings embedded in seemingly simple patterns and witnessed the skilled hands that continue to create beauty from humble materials of earth and dung.

The story of Litema is ultimately a story about the human capacity for creating meaning and beauty in the midst of daily life. It reminds us that art is not a luxury reserved for galleries and museums but a fundamental expression of what it means to be human. In the geometric patterns that grace the walls of Basotho homes, we see the universal human need for beauty, meaning, and connection expressed through the particular cultural vocabulary of a specific people and place.`,
        image: "/litema-book/ch1-panorama.png"
    },
    {
        id: "acknowledgments",
        type: "text",
        title: "Acknowledgments",
        content: `This book would not have been possible without the generous cooperation and support of the Basotho communities who have maintained the tradition of Litema across generations of change and challenge. We are particularly grateful to the master practitioners who shared their knowledge, skills, and cultural wisdom, and to the community leaders who welcomed our research and documentation efforts.

Special recognition must be given to the pioneering research of Dr. Gary van Wyk, whose comprehensive documentation of Litema in the 1990s provided the foundation for much of our understanding of this remarkable tradition. His commitment to collaborative research and cultural sensitivity established important precedents for ethical engagement with traditional knowledge.`
    },
    {
        id: "back-cover",
        type: "cover",
        title: "Back Cover",
        content: "© 2025 MOKHETHI RAMPETA. All rights reserved.\n\nISBN: [To be assigned]",
        image: "/litema-book/litema-back.png"
    }
];
