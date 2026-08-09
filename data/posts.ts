import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";
import post5 from "@/assets/post-5.jpg";
import post6 from "@/assets/post-6.jpg";

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  image: string;
  author: string;
  publishedAt: string;
  readTime: number;
  views: number;
  featured: boolean;
  keywords: string;
  content: string;
};

export const categories = [
  "All",
  "AI Tools",
  "Automation",
  "Productivity",
  "Reviews",
  "Guides",
] as const;

export const posts: Post[] = [
  {
    id: 1,
    slug: "10-ai-tools-that-will-automate-your-daily-tasks-in-2026",
    title: "10 AI Tools That Will Automate Your Daily Tasks in 2026",
    excerpt:
      "Last month I was drowning in repetitive work. These 10 tools cut my busywork down to almost nothing — here's exactly how I use each one.",
    category: "AI Tools",
    tags: ["AI tools", "automation", "productivity", "daily tasks"],
    image: post1,
    author: "Hamza Raza",
    publishedAt: "2026-07-14",
    readTime: 11,
    views: 18420,
    featured: true,
    keywords: "AI tools, automation, productivity, daily tasks",
    content: `Last month I was drowning in repetitive tasks. Spreadsheets, emails, scheduling, research... I was working 12-hour days and getting nowhere. Then I discovered these 10 tools and everything changed.

I'm not going to pretend it happened overnight. I broke two workflows, lost a client's data export for a day, and paid for one subscription I never opened again. But by week three my evenings were mine again.

Here's the honest breakdown.

## 1. Notion AI — notes that write themselves

I keep everything in Notion: client briefs, article outlines, invoices. The AI sits inside the page, so I don't have to copy anything into a chat window.

What I actually use it for: turning a messy call transcript into a clean brief, and rewriting my own first drafts when they sound stiff.

**Pricing:** around $10/user/month on top of your plan.
**Good:** zero context switching. **Not great:** it's average at long-form writing.

## 2. Zapier — the glue

Zapier is boring in the best way. Form submission goes to my sheet, then Slack, then a follow-up email. Set once, forget forever.

My favourite Zap: new Gmail label "invoice" to a Drive folder plus a row in my accounting sheet. That one alone saves me a full afternoon each month.

**Pricing:** free for 100 tasks, then from about $20/month.
**Watch out:** task counts vanish fast when you loop over rows.

## 3. Make.com — when Zapier gets expensive

Make is visual. You literally drag modules and watch the data flow. It's cheaper at volume and much better for branching logic.

I moved my content pipeline here: idea in Airtable, AI drafts an outline, image request goes out, Slack pings me for approval. 400 operations cost less than 30 Zapier tasks.

**Pricing:** free tier is generous, paid from $9/month.

## 4. ChatGPT — my research intern

I use it for research summaries, competitor comparisons, and turning bullet points into readable paragraphs. I never publish what it writes without editing. Ever.

Best trick I've learned: give it your own writing as a sample before asking for a draft. The difference is night and day.

## 5. Claude — code and long documents

When I need to reason over a 40-page PDF or debug a script, Claude wins for me. It follows instructions more carefully and admits when it's unsure.

I built my whole newsletter automation script with it, and I can barely write JavaScript.

## 6. Perplexity — search that cites

Google now gives me ads and SEO sludge. Perplexity gives me answers with links I can check. For anything factual — pricing pages, tax rules, tool comparisons — this is my first stop.

## 7. Gamma — presentations in minutes

Client deck used to take me three hours in Google Slides. I paste my outline into Gamma and get a decent deck in about four minutes. I still fix the ugly slides myself.

## 8. Otter.ai — meeting notes without typing

Otter joins the call, transcribes, and gives me action items. I stopped taking notes in meetings entirely, which means I actually listen now.

**Small annoyance:** it struggles with heavy accents and crosstalk. Read before you send.

## 9. Fireflies.ai — sales call memory

Similar to Otter, but the search across old calls is better. When a client says "we agreed on this in April", I find the exact sentence in ten seconds.

## 10. Mem — notes that resurface

Mem connects notes automatically and pushes old ones back to me when they're relevant. It's the tool I was most sceptical about and the one I now open daily.

## What I'd tell you to start with

Don't buy all ten. Pick the two that touch your biggest time sink:

1. Drowning in email and admin? Start with Zapier and Otter.
2. Writing all day? ChatGPT plus Notion AI.
3. Running a small team? Make.com and Fireflies.

Give each one a full week before you judge it. Most of these tools feel useless on day one and essential on day seven.

Which of your daily tasks would you hand off first if you could? Tell me in the comments — I read every one.`,
  },
  {
    id: 2,
    slug: "how-i-saved-15-hours-a-week-using-ai-automation",
    title: "How I Saved 15 Hours/Week Using AI Automation (Real Story)",
    excerpt:
      "I used to spend 3 hours daily on email. Now AI handles about 80% of it. Here's the before/after, the ROI, and the two automations that blew up in my face.",
    category: "Automation",
    tags: ["AI automation", "time management", "productivity hack"],
    image: post2,
    author: "Hamza Raza",
    publishedAt: "2026-07-02",
    readTime: 9,
    views: 12980,
    featured: true,
    keywords: "AI automation, time management, productivity hack",
    content: `I used to spend 3 hours daily on email responses. Now AI handles 80% of them.

That sentence sounds like a LinkedIn brag, so let me show you the boring version with actual numbers.

## Before and after

| Task | Before | After | Saved |
| --- | --- | --- | --- |
| Email replies | 15 hrs/week | 3 hrs/week | 12 hrs |
| Meeting notes | 3 hrs/week | 20 min/week | 2.6 hrs |
| Invoice admin | 2 hrs/week | 15 min/week | 1.75 hrs |
| Social posts | 4 hrs/week | 1.5 hrs/week | 2.5 hrs |
| Research | 5 hrs/week | 3 hrs/week | 2 hrs |

That's roughly 21 hours on paper. Realistically I got back about 15, because reviewing AI output is still work.

## What I automated, in order

**1. Email triage.** Every incoming message gets classified into one of four buckets: needs me, needs a template, needs scheduling, ignore. The template bucket gets a draft written automatically. I press send or edit.

**2. Meeting notes.** Recorder joins, transcript lands in Notion, action items get pushed to my task list. I do nothing.

**3. Invoices.** A watched Gmail label triggers a flow that files the PDF, logs the amount, and flags anything over my usual range.

**4. Content repurposing.** One blog post becomes a thread, a LinkedIn post, and a newsletter blurb. I rewrite the hooks by hand because AI hooks are terrible.

## The two automations that broke

**The auto-send disaster.** I let AI send replies without review for four days. It confidently promised a client a delivery date I never agreed to. That took a phone call and a discount to fix. Rule since then: AI drafts, humans send.

**The infinite loop.** My "reply to form submission" flow triggered my own "log incoming email" flow, which triggered the first one again. 600 tasks burned in 20 minutes. Always exclude your own address.

## The ROI, honestly

Monthly tool cost: about $95. Recovered time: roughly 60 hours a month. Even valuing my hour conservatively, that's a return I'd take every single time.

But here's the part nobody says: the first month was net negative. I spent maybe 18 hours building and fixing flows. Automation is an investment, not a shortcut.

## Three lessons

1. **Automate the task you hate, not the task that's easiest.** Motivation matters more than technical elegance.
2. **Add a human checkpoint anywhere money, dates, or promises are involved.**
3. **Write down what each automation does.** Six months later you won't remember, and a silent broken flow is worse than no flow.

What's the one task eating your week right now? Drop it below and I'll suggest a setup.`,
  },
  {
    id: 3,
    slug: "best-ai-tools-for-content-writers-comparison-guide-2026",
    title: "Best AI Tools for Content Writers: Complete Comparison Guide 2026",
    excerpt:
      "I tested 6 AI writing tools for 3 months on real client work. Here's the honest truth about each one, with a comparison table and my ratings.",
    category: "Reviews",
    tags: ["AI writing", "content creation", "tools comparison"],
    image: post3,
    author: "Hamza Raza",
    publishedAt: "2026-06-19",
    readTime: 12,
    views: 22110,
    featured: true,
    keywords: "AI writing, content creation, tools comparison",
    content: `I tested 6 AI writing tools for 3 months. Here's the honest truth about each one.

Not a demo. Real client work: blog posts, landing pages, email sequences, two ebooks. Same briefs, same editing standard.

## The comparison table

| Tool | Best for | Pricing | Strengths | Weaknesses | My rating |
| --- | --- | --- | --- | --- | --- |
| ChatGPT 4.0 | All-round drafting | $20/mo | Fast, flexible, great at outlines | Generic voice by default | 9/10 |
| Claude 3.5 | Long-form and editing | $20/mo | Natural prose, follows briefs | Cautious, refuses odd requests | 9/10 |
| Gemini Pro | Research-heavy pieces | $20/mo | Live sources, good summaries | Prose feels stiff | 7.5/10 |
| Jasper | Marketing teams | from $49/mo | Brand voice, templates | Expensive, thin without setup | 7/10 |
| Copy.ai | Short ad copy | from $49/mo | Quick variations | Weak at anything over 800 words | 6.5/10 |
| Writesonic | SEO blog drafts | from $20/mo | SEO structure built in | Repetitive phrasing | 6.5/10 |

## Sample test: the same brief

Brief: *"Write an opening paragraph for a post about switching from spreadsheets to a CRM, aimed at small agency owners."*

**ChatGPT:** "Spreadsheets are great — until they aren't. If you've ever lost a lead in row 402, you already know the problem."

**Claude:** "There's a specific moment every agency owner remembers: the client asks about a deal, and you're scrolling a spreadsheet with 14 tabs, hoping the answer is in there somewhere."

**Jasper:** "Are you tired of managing your leads in spreadsheets? Discover how a CRM can streamline your agency's growth."

Claude reads like a person. ChatGPT reads like a good copywriter. Jasper reads like an ad.

## How I'd pick

- **Solo writer, one subscription:** Claude for drafting, ChatGPT free tier for odd jobs.
- **SEO content at volume:** Writesonic for structure, then rewrite the middle sections yourself.
- **Team with brand guidelines:** Jasper, but only if someone actually configures the brand voice.
- **Ads and headlines:** Copy.ai, in bulk, then cut 90%.

## What none of them do well

They can't tell a story that happened to you. They don't know that your client hates the word "solution". They can't take a risk with a joke.

I've stopped asking AI for finished writing. I ask for structure, alternatives, and a second opinion. The sentences stay mine.

## My workflow now

1. I write a messy outline by hand — bad grammar, real opinions.
2. Claude tightens the structure and flags gaps.
3. I write the draft. Actually write it.
4. ChatGPT plays editor: "what's unclear here?"
5. I read it out loud. Anything I stumble on gets cut.

Total time: about 40% less than before, with better output than either me-alone or AI-alone.

Which tool are you using right now, and does it sound like you? I'd genuinely like to know.`,
  },
  {
    id: 4,
    slug: "7-ai-video-editing-tools-that-feel-like-magic",
    title: "7 AI Video Editing Tools That Feel Like Magic",
    excerpt:
      "Editing used to take me days. Now I finish in hours. Feature breakdown, output quality, pricing, and which one to start with if you've never edited before.",
    category: "AI Tools",
    tags: ["AI video editing", "content creation", "video tools"],
    image: post4,
    author: "Hamza Raza",
    publishedAt: "2026-06-05",
    readTime: 10,
    views: 15760,
    featured: false,
    keywords: "AI video editing, content creation, video tools",
    content: `Editing videos used to take me days. Now I finish in hours. These 7 tools are absolute game-changers.

I make two YouTube videos and about twelve short clips a month, alone, with no editor. Here's the stack that made that possible.

## 1. RunwayML — the one that surprised me

Text-to-video, background removal without a green screen, object erasing. I mostly use it for B-roll I could never shoot: a drone shot over a city, an abstract data visual.

**Quality:** genuinely good for 4-6 second cuts. Longer clips still drift.
**Pricing:** free credits, then from $15/month.

## 2. Pika Art — quick, stylised clips

Faster and cheaper than Runway for short stylised shots. Great for intros and transitions. Less controllable.

## 3. CapCut AI — where beginners should start

Auto captions that are actually accurate, auto reframe for vertical, one-click background noise removal. Free for most of what you need, works on phone and desktop.

If you've never edited a video in your life, open CapCut tonight and you'll have a decent short by bedtime.

## 4. Descript — editing by deleting words

This is the one that changed my process. It transcribes your video, and deleting a sentence in the text deletes it in the video. Removing every "um" takes one click.

**Best feature:** Studio Sound. It makes a bedroom recording sound like a podcast studio.
**Pricing:** free tier, paid from $19/month.

## 5. HeyGen — avatars that don't look cursed

For short explainers where I don't want to be on camera. The lip sync is convincing now, and the multi-language dubbing keeps my own voice.

I use it for client onboarding videos. Nobody has noticed yet. (Sorry.)

## 6. Fliki — script to video

Paste a blog post, get a narrated video with stock footage. Output is generic, but for faceless channels and simple recaps it's a huge time saver.

## 7. Synthesia — corporate training video

The most polished avatars and the strictest content rules. If you make internal training or product walkthroughs at a company, this is the safe choice. It's priced for companies too, from about $29/month.

## What I'd pick, by situation

- **Total beginner:** CapCut AI. Free, forgiving, everywhere.
- **Podcaster or talking-head creator:** Descript. Nothing else comes close for cutting speech.
- **Need footage you can't shoot:** RunwayML.
- **No camera, no problem:** HeyGen.

## One warning

AI video tools make it easy to publish a lot of forgettable content. Faster editing didn't make my videos better — writing a sharper script did. Use the saved hours on the script, not on posting more.

What are you editing with right now? If you're still trimming clips by hand on a timeline, try Descript for one video and tell me how it went.`,
  },
  {
    id: 5,
    slug: "ai-vs-human-which-actually-creates-better-content",
    title: "AI vs Human: Which Actually Creates Better Content?",
    excerpt:
      "I ran blind tests with 40 readers on AI-written and human-written articles. The results weren't what I expected, and the engagement data was even stranger.",
    category: "Guides",
    tags: ["AI vs human", "content quality", "future of writing"],
    image: post5,
    author: "Hamza Raza",
    publishedAt: "2026-05-21",
    readTime: 8,
    views: 9640,
    featured: false,
    keywords: "AI vs human, content quality, future of writing",
    content: `I've tested both extensively. Here's the uncomfortable truth.

Over four months I published 24 articles: 8 written entirely by me, 8 written by AI with light editing, 8 written together. Then I asked 40 readers to guess which was which.

## The blind test results

Readers correctly identified the AI-only pieces **61%** of the time. Not great for AI, but far better than the 90% I expected.

What gave it away, in their own words:

- "Every paragraph is the same length."
- "It never says anything risky."
- "The examples feel made up."
- "Too many lists."

Interestingly, nobody flagged grammar or facts. The AI pieces were technically cleaner than mine.

## The engagement data

| Type | Avg. time on page | Comments | Shares |
| --- | --- | --- | --- |
| Human only | 4m 12s | 31 | 88 |
| AI + editing | 2m 48s | 6 | 24 |
| Collaborative | 4m 01s | 27 | 71 |

The AI-only posts ranked fine in search. They just didn't make anyone feel anything, so nobody talked about them.

## Where AI clearly wins

- Structure and outlines
- Summarising long research
- Rewriting something you already said badly
- Volume work: product descriptions, FAQs, meta text
- Translation and localisation

## Where humans still win, by a lot

- Stories that actually happened
- Opinions with something at stake
- Specific numbers from your own experience
- Humour that lands
- Knowing what to leave out

That last one is the big one. AI adds. Good writers cut.

## What I do now

I treat AI as a fast, tireless assistant with no taste. It gets me from blank page to rough shape. Then I do the part that matters: the story, the opinion, the cutting.

My collaborative posts performed almost as well as my hand-written ones and took half the time. That's the answer for most people.

## A prediction, for what it's worth

In two years, "written by AI" won't be a useful label — almost everything will pass through a model somewhere. What will matter is whether a real person had something to say.

So the question isn't AI or human. It's whether you're bringing anything to the page that a model couldn't have guessed.

Have you noticed yourself scrolling past AI-sounding articles lately? What tips you off? I'd love to hear it.`,
  },
  {
    id: 6,
    slug: "my-ai-morning-routine-30-minutes-that-sets-up-the-day",
    title: "My AI Morning Routine: 30 Minutes That Sets Up the Whole Day",
    excerpt:
      "No cold plunges, no 5am. Just a 30-minute routine where AI does the sorting and I do the thinking. Here's the exact sequence.",
    category: "Productivity",
    tags: ["productivity", "AI tools", "routines"],
    image: post6,
    author: "Hamza Raza",
    publishedAt: "2026-05-08",
    readTime: 7,
    views: 8320,
    featured: false,
    keywords: "productivity, morning routine, AI tools",
    content: `I don't wake up at 5am and I've never taken a cold plunge. But I do have 30 minutes every morning that decide whether the day goes well or falls apart.

Here's exactly what happens, in order.

## 0-5 min: read the overnight summary

Before I open email, I read one page. An automation collects everything that happened overnight — new emails tagged important, form submissions, calendar changes — and summarises it into a single Notion page.

I built this because opening my inbox first thing made me reactive for the next two hours. Now I get the facts without the pull.

## 5-12 min: pick three things

I write down three tasks. Not ten. Three.

Then I paste them into a chat and ask one question: **"What am I likely underestimating here?"** About a third of the time it catches something real — a dependency, a person I need to ask first, a file I don't have yet.

## 12-20 min: clear the template replies

My email triage flow has already drafted replies for the predictable messages. I read, adjust the tone, send. Eight to twelve emails, gone, in under ten minutes.

The rule I never break: anything involving money, deadlines or promises gets written by me from scratch.

## 20-27 min: prep the deep work block

I open the one document I'll actually work in and ask for a structure, not content. "Give me five possible section orders for this." I pick one, throw the rest away, and start writing.

This is the step that killed my blank-page procrastination. It's much easier to argue with a bad outline than to invent a good one.

## 27-30 min: close everything

Slack off. Email closed. Phone face down in a drawer. Timer set for 90 minutes.

## What went wrong when I tried this before

My first version had eleven steps and a dashboard. I kept it for four days. The routine only stuck when it got small enough that a bad night's sleep couldn't break it.

Two other mistakes worth avoiding:

1. **Letting AI pick the three tasks.** It optimises for what's easy to describe, not what's important.
2. **Reading the summary in bed.** The routine only works sitting at the desk. Don't ask me how I know.

## Try the smallest version

Skip the automations. Tomorrow morning, write three tasks, ask what you're underestimating, then close everything for 90 minutes. That's 90% of the benefit with none of the setup.

What does the first 30 minutes of your day look like right now — honestly?`,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const categoryCounts = () =>
  categories
    .filter((c) => c !== "All")
    .map((c) => ({ name: c, count: posts.filter((p) => p.category === c).length }));

export const allTags = () => Array.from(new Set(posts.flatMap((p) => p.tags)));

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
