# Privacy and Security

By the end of this section, you will be able to:

- Explain the importance of privacy and security in the context of library services, especially in the transition from physical to electronic resources.
- Identify historical and contemporary examples of privacy issues in libraries, such as due date cards and government surveillance.
- Understand the role of metadata and how even seemingly innocuous data points can reveal sensitive information about patrons.
- Describe the significance of Transport Layer Security (TLS) and its role in encrypting data to protect user privacy on library websites.
- Evaluate the trade-offs involved in using website analytics tools on library websites, including the privacy concerns associated with tracking user interactions.
- Discuss how third-party vendor practices may conflict with library values regarding user privacy and data security.
- Suggest privacy-conscious alternatives to commonly used analytics tools to improve data privacy for library users.
- Recognize the ethical implications of privacy decisions and develop strategies for balancing user data collection with patron confidentiality.

## Introduction

[Breeding (2016)][breeding2016] begins with the following statement:

> Libraries have a long tradition of taking extraordinary measures to ensure the privacy of those who use their facilities and access their materials.

This is mostly true but not entirely so.
When I was an undergraduate in the early 1990s, I remember going to the library to look for books on a sensitive topic.
I saw a book on the shelves that looked relevant, and when I pulled it off the shelf and opened it,
I noticed that a friend had checked the book out before me because their name was written on the due date card in their handwriting.
Even though I had grown up with these due date cards in library books, the privacy issues with these cards had never occurred to me.
At the time, I decided not to check out that book because of that issue.

We might be comforted in thinking that the kind of information that was supposedly revealed to me in that book would not scale up easily.
It was a serendipitous event that involved me looking for a book on the same topic and then just happening to pick the one book that my friend had used.
It's not likely, then, that this might pose a big problem at scale.

However, let's think of that information in that due date card as [metadata][metadata] (data about data), and then ask, how could we use it?
The sociologist Kieren Healy did that kind of thing with membership lists from colonial times.
He showed that using limited data like the one I found in that book, some important things could be discovered.
For example, [Healy][healy1] imagined that if the British had access to simple [social network analysis (SNA)][sna] methods in 1772,
they could have identified that Paul Revere was a patriot and then have used that information to prevent or interfere with the American Revolution.
I encourage you to read his blog entry and his [follow-up reflection][healy2] because it is a neat *what-if* hypothetical case study.

## Modern Privacy Concerns

Most libraries in North America have removed due date slips, of course, and while this has removed the problem above,
the overall migration from paper-based workflows to electronic ones have raised other problems.
For example, in the early 2000s, not long after the Patriot Act was passed after 9/11,
FBI agents ordered Connecticut librarians to ["identify patrons who had used library computers online at a specific time one year earlier"][connfour].
Per the law, the librarians involved were placed under a gag order, which prevented them from speaking out.
This led to a lawsuit against the US Attorney General.
Eventually the librarians were released from their gag order and allowed to discuss the event.
More currently, books bans have led lawmakers to [attempt to enshrine laws][sb597_sb587] that allow parents
to receive emails of works their children borrow from libraries.
And it's not all digital.
New ["Snitch State" tactics][snitch_state] have motivated some librarians to remove books from their shelves.
Surveillance comes in all shapes.

## Technical Aspects of Privacy

Privacy and security issues can present as more mundane but still be important.
Since users of libraries of all types visit library homepages, then encrypting web and internet traffic is important.
For example, the [major web browsers announced][tlsbrowsers] that they would no longer support Transport Layer Security (TLS) protocol versions 1.1 or earlier
and any site that had not yet migrated to TLS version 1.2 or above would be inaccessible.

TLS is used to encrypt web traffic and can be verified via the `https` protocol in a URL and the lock icon in your browser's URL bar.
It is a cryptographic protocol designed to provide secure communication over the internet.
Using TLS cryptography means encrypting data transmitted between a user's browser and a website.
This ensures that sensitive information such as login credentials and payment details remain private and protected from eavesdropping or tampering.
TLS replaces the older Secure Sockets Layer (SSL) protocol but itself must be continually updated as anti-security technology becomes more advanced.

This news from the web browser companies was released in early March 2020, just before the pandemic.
The browser vendors thus postponed blocking poorly encrypted websites.
Still, it took time for some websites to begin using the new version of TLS and some websites,
including library home pages, were inaccessible via some web browsers for a while even with the advanced notice.

## Vendor Issues

Breeding (2016) introduces a variety of technologies and policies that are related to security and privacy.
These encompass important technological considerations, like web traffic encryption.
There are also important policy considerations, too, like how third party vendors, like Primo etc., implement privacy and security mechanisms.
[DiVittorio and Gianelli (2021)][divittorio2021] discuss the issue of privacy and security issues with third party vendors.
Overall, their findings highlight the lack of alignment between the values of librarians and the profit-based motives of vendors.
It's important to note how unresponsive vendors were to their requests to participate in data collection.
Remember that [SERU][serurp] has a section in its recommended practice dedicated to Confidentiality and Privacy.
In case you work at a library that does not use SERU, this is how SERU can be useful to you.
It can inform about the kinds of provisions that a library ought to have in a license if the default provisions a vendor proposes
do not include the necessary components.

There are pros and cons with intentionally choosing services that make library usage less private.
For example, a number of library sites use [Google Analytics][google_analytics] to track site usage and other metrics.
Google Analytics specifically track how users interact on web pages.
It collects page views, session duration, traffic sources (where users are coming from when they first come to your site),
click and user flows, geolocation and device information, and more.
The data helps website owners, including library website owners, to understand usage patterns,
such as which pages are most popular, how long users stay on the site or page, which website features are most useful or problematic, and so on.

Understanding how patrons use library websites is important, but this means that our actions, albeit somewhat anonymized,
on these library sites are being collected and stored by Google (or some other analytic service).
Anonymization generally means that identifiable personal information is stripped from data.
The data that Google collects is technically pseudonymized.
This means that although the identifiers that Google (or some other analytics company) uses are not immediately traceable,
and individual's identity could be linked back if certain data points were combined, such as in the Paul Revere case.
Unlike in the late 1700s, today we have much more advanced methods, data sources, and computation to make that happen.
This means that we really should have to trust these sites with that information.
Still, the fact that libraries use these services raises some ethical questions.
That is, libraries are trusted institutions, and the use of analytics tools like this introduces issues about how private patron data is.

Also, web pages, library web pages included, can be made up of multiple types of code, including HTML, CSS, and JavaScript.
This code can be sourced from external servers and services.
For example, the fonts that a web page uses might be sourced from a separate font server that's not controlled by a library.
Including third-party code entails more tracking mechanisms,
since anytime a page is visited that contains a font sourced from another server, or any other code,
the third party server can log that information.
This enables more cross-referencing capabilities.

Remember that security and privacy issues like this can be mundane and not necessarily trendy.
However, there is a trade-off.
If we want to learn more about how users interact with library websites in order to improve usability and accessibility,
then we have to have some of this data.
Here's where a privacy policy might come into play.
And technical solutions are game, too.
Some analytics software, such as [Matomo][matomo] or [Plausible][plausible], were designed to be privacy-friendly.
(Note, though, that I have not personally vetted or used either of these products.)

## Conclusion

Like all things I've covered in this work, the move to electronic resources has disrupted how we think about
and handle the privacy and security of our patrons.
The DiVittorio and Gianelli (2021) article highlights how more than ever much of what we might like to protect and keep secure is out of librarians' control,
and that this has potential ramifications for our communities, and especially, for our marginalized and unprotected ones.

When you become librarians, it's important to think about the usability of your services,
but it's also important to think about your patrons' privacy.
Be **proactive** in searching for technical solutions, in developing privacy policies, and in negotiating with vendors
to ensure that your patrons' privacy is safeguarded.

## Readings / References

Breeding, M. (2016).
Chapter 1. Issues and technologies related to privacy and security.
In Privacy and Security for Library Systems.
*Library Technology Reports, 52*(4), 5-12.
[http://dx.doi.org/10.5860/ltr.52n4][breeding2016]

DiVittorio, K., & Gianelli, L. (2021).
Ethical financial stewardship: One library's examination of vendors' business practices.
*In the Library with the Lead Pipe*.
[https://www.inthelibrarywiththeleadpipe.org/2021/ethical-financial-stewardship/][divittorio2021]

[breeding2016]:http://dx.doi.org/10.5860/ltr.52n4
[connfour]:https://www.courant.com/opinion/op-ed/hc-op-librarians-stand-up-to-patriot-act-again-20160927-story.html
[divittorio2021]:https://www.inthelibrarywiththeleadpipe.org/2021/ethical-financial-stewardship/
[google_analytics]:https://marketingplatform.google.com/about/analytics/
[healy1]:https://kieranhealy.org/blog/archives/2013/06/09/using-metadata-to-find-paul-revere/
[healy2]:https://kieranhealy.org/blog/archives/2013/06/11/following-up-on-paul-revere/
[matomo]:https://matomo.org/
[metadata]:https://en.wikipedia.org/wiki/Metadata
[plausible]:https://plausible.io/
[sb597_sb587]:https://www.the74million.org/article/proposed-legislation-would-notify-parents-of-child-library-checkouts/
[serurp]:https://www.niso.org/publications/rp-7-2012-seru
[sna]:https://en.wikipedia.org/wiki/Social_network_analysis
[snitch_state]:https://www.theatlantic.com/magazine/archive/2024/11/texas-red-state-surveillance-book-bans-abortion/679950/?utm_source=chatgpt.com
[tlsbrowsers]:https://www.zdnet.com/article/browsers-to-block-access-to-https-sites-using-tls-1-0-and-1-1-starting-this-month/
