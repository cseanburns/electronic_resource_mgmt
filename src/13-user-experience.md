# User Experience

By the end of this section, you will understand that:

1. **User Experience (UX) is Multi-Dimensional**: UX encompasses parameters like actors, objects, contexts, and interfaces. Understanding these parameters helps in evaluating how effectively users interact with library systems.
2. **Importance of Gathering Data from Diverse Users**: UX research must include diverse patron feedback, from students to faculty, and from users with disabilities&emdash;ensuring that the user experience is inclusive and addresses the needs of all patrons.
3. **User Research Methods Enrich UX Understanding**: Incorporating user research methods, such as card sorting and think-aloud protocols, adds depth to understanding user needs and behaviors. These methods help librarians develop a more user-centered approach to system design and evaluation.
4. **There are Different Types of Data to Inform UX**: Libraries can use both *usage data* (how users interact with a system) and *breakage data* (issues or obstacles users face) to inform decisions. Using both data types provides a fuller picture of system performance and user challenges.
5. **System Complexity Affects UX**: As librarians gain expertise with systems, they may lose sight of novice user challenges. Regular UX studies can help bridge the gap between librarian expertise and novice needs, ensuring the library systems are accessible and usable for everyone.
6. **Actionable User-Centered Design Principles**: Strategies such as chunking, highlighting important elements, simplifying choices, and managing complexity can make user interfaces more intuitive, reducing user anxiety and improving overall usability.

## Introduction

Electronic resource management sits at an awkward intersection of systems, vendors, metadata pipelines,
licensing restrictions, and local infrastructure.
Because of this, small design decisions on our websites can shift the emotional experience of using library resources and
also the success of using them, which is to acquire documents of some sort.
User experience (UX) is thus not only a matter of aesthetics or interface polish.
It is also a way to measure how well our systems support the people who rely on them to learn, research, and
navigate complexity.

When we approach ERM work through a UX lens, we begin to understand not only how systems behave, but
how people *experience* them.
Patrons do not see resolver logs or mismatched metadata, but
they do see buttons that **promise** *Full Text Availability* that sometimes fail to provide that full text.

What follows is an introduction to a set of parameters for understanding UX.
This chapter examines how system complexity can shape patron encounters and outlines research methods and data sources
that librarians can use to evaluate and improve their experiences.
The goal is not to turn every librarian into a UX specialist, but it is to encourage a mindset that
keeps us attentive to the perspectives of novice users and
on the structural points where their experience drifts from those of us who are not novices.

## UX Parameters

What is user experience then?
[Dickson-Deane and Chen (2018)][dickson2018] write that
<q>user experience determines the quality of an interaction being used by an actor
in order to achieve a specific outcome</q> (Intro section, para 1).
[Parush (2017)][parush2017] highlights adjacent terms like *human-computer interaction (HCI)* and *usability*.
Let's say then that HCI encompasses the entire domain of interaction between people and computers and
how that interaction is designed, and that *user experience (UX)* focuses on the quality of that interaction.
These are not precise definitions, and some people might use the terms *UX* and *HCI* interchangeably.
However, as ERM librarians, the job is to focus on the quality of the patron's experience with electronic services.
This entails understanding both the systems and technologies involved and the users interacting with them.

Dickson-Deane and Chen (2018) outline the parameters involved with UX.
Let me modify their example and frame it within the context of an ERM experience for a patron:

- **Actor**: A user of the web resource, like a library website.
- **Object**: The web resource, or some part of it.
- **Context**: The setting.
  - What's happening?
  - What's the motivation for use?
  - What's the background knowledge?
  - What's the action?
- **User Interface**: The tools available by the object and the look and feel.
  - More specifically, Parush (2017) states that "the user interface mediates between the user and computer" and it includes three basic components:
    - *controls*: The tools used to control and interact with the system: buttons, menus, voice commands, keyboards, etc.
    - *displays*: The information presented to the user or the hardware used to present the information: screens, speakers, etc.
    - *interactions and dialogues*: The exchange between the system and the user including the use of the controls and responding to feedback.
- **Interaction**: What the actor is doing with the UI
- **(Intended/Expected/Prior) User experience**: The intended or expected use of the object. The user's expectations based on prior use.
- **(Actual) User experience**: The actions that took place; the actions that had to be modified based on unintended results.

Taken together, these parameters give us a systematic way to think about how people
actually encounter the systems librarians manage.
For ERM librarians, this matters because many of our services are assembled from multiple vendor platforms
that are stitched together by link resolvers, discovery layers, and authentication tools.
Each layer introduces its own controls, displays, and dialogues, and
the same seams between them are often where UX breaks down.
Going forward, we can use these parameters not only to describe interactions, but
to analyze the points where novice users may struggle, misinterpret feedback, or abandon the task entirely.

Furthermore, these parameters would be helpful for devising a UX study that involves observing patrons interacting with
a system and then interviewing them to complete the details.
Note that the same kind of systematic thinking can be applied to evaluate other user experiences,
like those between a librarian and an electronic resource management system.
Often the focus is on patron user experience, but it's just as important to evaluate UX for librarians and
to consider UX when selecting an ERM system or an ILS/LSP system.

In any case, these parameters help us step through and highlight the complicated process of interacting with a computer,
generally, or a library resource more specifically.
As with other topics we've discussed in this book, we can incorporate these parameters into a workflow for evaluating UX.

## Complex Library Websites

It is as a result of the complexities involved and because of a focus on systems that [Pennington (2015)][pennington2015]
argues for a more UX centered approach to library website design.
Think about your own state of knowledge of ERM before you started learning about this area of librarianship.
For example, now that you know somewhat how link resolvers function,
your experience using them and your understanding of their technical aspects provides you with a set of skills and experiences
that make you more likely to identify the cause of a malfunction if you find one.
With this ability to identify problems, problems becomes easier to solve, and the experience itself involves less anxiety.
However, most users and patrons of these systems will not have any technical knowledge of these systems.
Thus, when these systems break on them, their frustration with the experience might lead to unfortunate outcomes:
they may not retrieve the information they need; they may not reach out to a librarian for help; or
they may stop using the library's resources in preference for a resource of inferior quality.
We need to remember that this happens, and if possible, to build in *proactive troubleshooting* processes
that anticipate and solve them before they do happen to patrons.

Let's make this concrete.
Imagine a first year student search for a peer-reviewed journal article.
This is a common assignment for students at universities.
During their search, they click a "Full Text Available" link in the discovery layer, but
then land on a publisher page that asks them to log in or purchase the article
(this in fact happened to me on the day that I'm writing this).
The student reasonably concludes that the library doesn't actually have access.
A librarian, on the other hand, immediately recognizes that the OpenURL resolver sent the wrong metadata to the publisher,
or that the publisher mis-tagged the article.
The librarian knows to reload the link, try an alternative source, or check the title-level holdings.

From the student's perspective, the system basically "lied" to them.
From the librarian's perspective, the system mis-routed a metadata field.

This difference in people's mental models is exactly why UX work is essential.
Patrons do not come equipped with vendor knowledge, platform histories, or metadata troubleshooting techniques.
They only see a promise of access followed by a dead end, and
this emotional experience of frustration, confusing, or even embarrassment is as important as the technical cause.

Thus lies the crux.
As you gain more skill and expertise with these systems,
you will eventually lose the ability to see these systems as a novice user, and
that distance will only grow over time.
To mitigate this, it is essential to actively gather data from a diverse range of users (Pennington, 2015).
For example, gathering data from different user demographics,
such as students versus faculty, users with disabilities, or children versus teens,
can reveal varying UX challenges that are often overlooked by experienced librarians.
UX research that includes diverse patron feedback ensures that the needs of all user groups are taken into account.
In short, user experience research nurtures a user centered mindset.

Indeed, [Kraft et al. (2022)][kraft2022] used focus groups and surveys to
collect user experience data on a library's implementation of its A-Z Database List.
As the authors point out,
librarians have long made efforts to reduce the use of library terminology in their messaging to patrons
since this only serves as a point of confusion.
However, their focus group participants described contrasting opinions about how color was used on the site, and
how color was used had some dramatic, surprising effects on which sources were selected to pursue.
The study highlights that when gathering user feedback,
it is important to consider a variety of user research methods to get a fuller picture.
We can even add additional methods, such as [card sorting][card_sorting]
(for understanding how users group and label information) and
[think-aloud protocols][think_aloud]
(where users verbalize their thoughts while using a system).
These methods provide additional insights that can complement focus groups and surveys.
All methods have their strengths and weaknesses, but
selecting the appropriate approach based on research goals is key to effective UX evaluation.

## The Data That Exists

In addition to user studies that require conducting direct research and
reading prior studies that require literature searches,
we should also know that libraries already possess a wealth of data to explore, and this data could provide needed insight.
Here, as we've learned before, workflows play an important role in applying mechanisms to track, report, and
fix problems with electronic resource systems.
[Browning (2015)][browning2015], for example, describes the use of [Bugzilla][bugzilla].
This is an application that's commonly used for software development for bug tracking and
generating reports about broken code.
Once problems are identified, tools like Bugzilla can be used to categorize and to facilitate quick solutions.
It's an interesting and novel adaptation of an application designed for a different purpose, but
it highlights an important takeaway;
there are thus two key types of data that provide insights into UX: data about usage and data about breakage.
Whereas usage data helps us understand how users interact with a system and what they do ([Fry, 2016][pennington2016]),
breakage data focuses on identifying errors or issues that users encounter, as described by Browning (2015).
Both kinds of data are crucial and combining both perspectives offers a more comprehensive understanding of user experience.

## Conclusion

I agree with [McDonald (2016)][pennington2016] that despite having around 30 or so years of experience
with web-based and other electronic resource types, we are still in the throes of disruption.
There's much yet to learn about designing for the web,
just like there's a lot left to learn about how designing physical spaces.
Nothing will be settled for a while.
Although I doubt if there will be any single dominate user experience or user interface,
since there are many cultures, backgrounds, and aesthetics,
I'm sure the low-hanging fruit problems will work out soon enough.
Remember though that 95% of the cause of all of this complexity is due to copyright issues,
which necessitate the entire electronic resource ecosystem and
the complications that are introduced by working with vendors who work with different, but overlapping, publishers, etc.
If something major were to change about copyright, then it's a whole new ballgame.

But in conclusion, when considering how UX research fits into library work,
remember the importance of gathering data from users themselves:
data that reveals both what works well and what doesn't.
In conducting UX work, refer also to the information-seeking literature when it's appropriate to do so.
This literature will yield insights into the processes people use to use these systems.
It's essential to reflect on user-centered design principles,
such as [chunking][chunking], [highlighting][highlighting], [simplifying choices][simplifying],
and [managing complexity][complexity].
These are strategies that can help design user interfaces that are intuitive and accessible for all users.

## Action List

Below are some practical steps for applying a UX mindset in ERM work:

- Walk through a common patron task as a novice user.
  Use a guest account and try to access an article or troubleshoot a link without relying on your expertise.
  Note every point of friction.
- Run one quick test with a real user.
  Ask a student (of any age) or someone from the public (if at a public library) to perform a single task
  while thinking aloud.
  Even ten minutes with them may provide insight you wouldn't otherwise get.
- Document all breakage that you find.
  Put this in a spreadsheet and categorize the breakage.
  Patterns will eventually emerge with enough data (e.g., broken links, access failures, patron-reported errors),
  and you could use this to create simple workflows that foster proactive troubleshooting.
- Remove jargon where possible.
  Review public-facing pages for terminology that makes sense to librarians but not to patrons
  (this is also a chance to ask patrons about what the terminology they encounter).
  Replace, define, or eliminate that jargon.
- Consult a usability or information-seeking study at least a couple of times a year.
  If you keep up with the literature, it'll strengthen your intuition about UX patterns and issues.
- Share findings with colleagues.
  This can help to avoid repetition of the same mistakes and encourage a culture of user-center thinking.

## Readings / References

Browning, S. (2015).
Data, data, everywhere, nor any time to think: DIY analysis of e-resource access problems.
*Journal of Electronic Resources Librarianship, 27*(1), 26–34.
[https://doi.org/10.1080/1941126X.2015.999521][browning2015]

Kraft, A., Scronce, G., & Jones, A. (2022).
Virtual focus groups for improved A-Z list user experience.
*The Journal of Academic Librarianship, 48*(4), 102541.
[https://doi.org/10.1016/j.acalib.2022.102541][kraft2022]

Pennington, B. (2015).
ERM UX: Electronic resources management and the user experience.
*Serials Review, 41*(3), 194–198.
[https://doi.org/10.1080/00987913.2015.1069527][pennington2015]

## Additional References

Adams, A. L., & Hanson, M. (2020).
Primo on the go: A usability study of the Primo mobile interface.
*Journal of Web Librarianship*.
[http://www.tandfonline.com/doi/abs/10.1080/19322909.2020.1784820][adams2020]

Dickson-Deane, C., & Chen, H.O. (2018).
Understanding user experience.
In M. Khosrow-Pour (Ed.), *Encyclopedia of Information Science and Technology* (4th edition., pp. 7599–7608).
IGI Global.
[https://doi.org/10.4018/978-1-5225-2255-3.ch661][dickson2018]

Hamlett, A., & Georgas, H. (2019).
In the wake of discovery: Student perceptions, integration, and instructional design.
*Journal of Web Librarianship, 13*(3), 230–245.
[https://doi.org/10.1080/19322909.2019.1598919][hamlett2019]

Parush, A. (2017).
Human-computer interaction.
In S. G. Rogelberg (Ed.), *The SAGE Encyclopedia of Industrial and Organizational Psychology* (2nd edition, pp. 669–674).
SAGE Publications, Inc.
[https://doi.org/10.4135/9781483386874.n229][parush2017]

Pennington, B., Chapman, S., Fry, A., Deschenes, A., & McDonald, C. G. (2016).
Strategies to improve the user experience.
*Serials Review, 42*(1), 47–58.
[https://doi.org/10.1080/00987913.2016.1140614][pennington2016]

[adams2020]:http://www.tandfonline.com/doi/abs/10.1080/19322909.2020.1784820
[browning2015]:https://doi.org/10.1080/1941126X.2015.999521
[bugzilla]:https://www.bugzilla.org/
[card_sorting]:https://www.nngroup.com/articles/card-sorting-definition/
[chunking]:https://www.nngroup.com/articles/chunking/
[complexity]:https://www.nngroup.com/articles/complex-application-design-framework/
[dickson2018]:https://doi.org/10.4018/978-1-5225-2255-3.ch661
[hamlett2019]:https://doi.org/10.1080/19322909.2019.1598919
[highlighting]:https://www.nngroup.com/articles/visual-hierarchy-ux-definition/
[kraft2022]:https://doi.org/10.1016/j.acalib.2022.102541
[parush2017]:https://doi.org/10.4135/9781483386874.n229
[pennington2015]:https://doi.org/10.1080/00987913.2015.1069527
[pennington2016]:https://doi.org/10.1080/00987913.2016.1140614
[simplifying]:https://www.nngroup.com/articles/simplicity-vs-choice/
[think_aloud]:https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/
