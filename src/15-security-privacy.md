# Privacy and Security

[Breeding (2016)][breeding2016] begins 
with the following statement:

> Libraries have a long tradition of taking extraordinary
> measures to ensure the privacy of those who use their
> facilities and access their materials.

This is mostly true but not entirely so.
When I was an undergraduate,
I remember going to the library to look
for books on a sensitive topic.
I saw a book on the shelves
that looked relevant, and
when I pulled it off the shelf
and opened it,
I noticed that a friend of mine
had checked the book out before me
because their name was written
on the due date card in their handwriting.
Even though I had grown up
with these due date cards
in library books,
it had never occurred to me before
then how these cards could
pose a problem with privacy.
At the time,
I decided not to check out
that book because of that issue.

We might be comforted in
thinking that the kind of
information that was supposedly
revealed to me in the book that
my friend had checked out, and
that I had opened,
is the kind of information that
would not scale up easily.
It was a serendipitous event that
involved me looking for a book
on the same topic and then just
happening to pick the one book
that my friend had used.
It's not likely, then, that
this might pose a big problem at scale.

However, let's think of that
information in that due date
card as metadata,
and then ask,
how could we use it?
The sociologist Kieren Healy
did that kind of thing with membership
lists from colonial times.
He showed that using limited
data like the one I found in that book,
some important things could be discovered.
For example, [Healy][healy1] imagined
that if the British had access to
simple social network analysis
methods in 1772,
they could have identified that
Paul Revere was a patriot and then
have used that information
to prevent or interfere with
the American Revolution.
I encourage you to read his blog entry and
his [follow-up reflection][healy2]
because it is a neat
*what-if* hypothetical case study.

Most libraries in North America
have replaced due date slips
with bar codes,
and while this has removed
the problem above,
the overall migration from
paper-based workflows to
electronic ones have
raised other problems.
Not long after the Patriot Act
was passed after 9/11,
FBI agents ordered a Connecticut librarian to
["identify patrons who had used
library computers online at a
specific time one year earlier"][connfour].
Per the law,
the librarians involved were
placed under a gag order,
which prevented them from speaking out.
This led to a lawsuit against the 
US Attorney General.
Eventually the librarians were released
from their gag order and
allowed to discuss the event.

There are occasionally big,
dramatic cases like the one
described above, but
privacy and security issues are
often much more mundane but
still quite important.
Since many users of libraries
of all types visit library homepages,
then encrypting all the web/internet
traffic is important.
A couple of years ago, the
[major web browsers announced][tlsbrowsers]
that they would no longer support
Transport Layer Security (TLS)
protocol versions 1.1 or earlier, and
that any site that had not yet migrated
to TLS version 1.2 or above
will not be accessible.
TLS is used to encrypt web traffic.
This news came out in early March 2020, and
the pandemic followed soon after.
The browser vendors thus postponed
blocking poorly encrypted websites for a few months.
It took a while for some websites
to begin using the new version of TLS and
some sites were inaccessible for a while even
with the advanced notice.

In fact, for a while I had to enable
an insecure connection to libraries.uky.edu in
Firefox if I wanted to visit it.
When I enabled it,
then my activity on libraries.uky.edu
was potentially visible to others under
certain conditions.
Note, however, that once I signed
into my library account,
I'm transferred to Primo's cloud service,
and then to UK's OAuth page.
These parts of the encryption
chain are fairly strong.
So it's only activity specifically on
libraries.uky.edu that was not good at the time.

Breeding (2016) introduces a
variety of technologies and policies
that are related to security and privacy.
These encompass important
technological considerations,
like web traffic encryption.
There are also important
policy considerations, too,
like how third party vendors implement
privacy and security mechanisms,
like the Primo example above.
[DiVittorio and Gianelli (2021)][divittorio2021]
discuss the issue of privacy and security
issues with third party vendors.
Overall, their findings highlight
the lack of alignment between
the values of librarians and the profit-based
motives of vendors.
It's also important to note how 
unresponsive many vendors were to 
their requests to participate in data collection.
Remember that [SERU][serurp] has a
section in its recommended practice
dedicated to Confidentiality and Privacy.
In case you work at a library that
does not use SERU,
this is how SERU can be useful to you.
It can inform us of
the kinds of provisions that a
library ought to have in a license if the
default provisions a vendor proposes
do not include the necessary components.

There are some pros and cons with
intentionally choosing services that
make library usage less private.
A number of library sites use
Google Analytics to track site
usage and other metrics.
Understanding how patrons use library websites
is important, but
this means that our actions,
albeit somewhat anonymized,
on these library sites are being
collected and stored by Google
(or some other analytic service).
Also, many websites,
library websites included,
use fonts that are hosted on other servers,
but doing so entails another tracking mechanism, too,
since anytime a page is visited that contains
a font sourced from another server,
a log entry is added of that usage.
There's a trade-off,
as I mentioned.
If we want to learn more about
how users interact with library websites
in order to improve usability and accessibility,
then we have to have some of this data.
Here's where a privacy policy
might come into play.

## Conclusion

Like all things I've covered in this work,
the move to electronic resources has disrupted
how we think about and handle the privacy
and security of our patrons.
The DiVittorio and Gianelli (2021) article,
in fact, highlights how more than ever,
much of what we might like to protect and
keep secure is completely out of librarians' control,
and that this has potential ramifications for
our communities, and especially,
for our marginalized and unprotected ones.

## Readings / References

Breeding, M. (2016). Chapter 1. Issues and technologies
related to privacy and security. In Privacy and Security for
Library Systems. *Library Technology Reports, 52*(4), 5-12.
[http://dx.doi.org/10.5860/ltr.52n4][breeding2016]

DiVittorio, K., & Gianelli, L. (2021). Ethical financial
stewardship: One library’s examination of vendors’ business
practices. *In the Library with the Lead Pipe*.
[https://www.inthelibrarywiththeleadpipe.org/2021/ethical-financial-stewardship/][divittorio2021]

[breeding2016]:http://dx.doi.org/10.5860/ltr.52n4
[connfour]:https://www.courant.com/opinion/op-ed/hc-op-librarians-stand-up-to-patriot-act-again-20160927-story.html
[divittorio2021]:https://www.inthelibrarywiththeleadpipe.org/2021/ethical-financial-stewardship/
[healy1]:https://kieranhealy.org/blog/archives/2013/06/09/using-metadata-to-find-paul-revere/
[healy2]:https://kieranhealy.org/blog/archives/2013/06/11/following-up-on-paul-revere/
[serurp]:https://www.niso.org/publications/rp-7-2012-seru
[tlsbrowsers]:https://www.zdnet.com/article/browsers-to-block-access-to-https-sites-using-tls-1-0-and-1-1-starting-this-month/
