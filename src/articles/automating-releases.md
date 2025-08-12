---
title: "Release Management: How we automated this process and saved hours of work"
description: "Every software must have its own release version control, and here isnt different. In this post we will take a look in how we automated this process inside our company."
author: "Matheus Gobbo Bernardi"
authorPicture: "/team/matheus.webp"
category: "automation"
date: "2025-08-12"
bannerImage: "/blog/automating-releases/banner.webp"
tags:
  - notion
  - github
  - automation
  - release management
---

As a software engineer and manager of a small team, we often have to create new releases for our systems. And of course, this process is simple, but doing everything manually takes time, and it’s extremely boring!

This way, we created our own automation to do so, helping us saving hours of manual work.

In this video we will guide you through the concepts of publishing software releases, why it is important and how we automated this process inside our company.

My name is Matheus and I’m the founder and CEO of Beyonders.

# 1. What orbits a Release?

I believe everyone watching this video already knows what a release is. But I like to say that **it’s a new version of the system that is now published and available to users**.

If you search online, you’ll see that a release can’t be summed up in a single word — it’s a complete process, and I agree.

Many companies have their own methods and objectives, but in most cases, this process includes:

- Publishing a new version for users (like I mentioned before)
- Incrementing the system’s version number
- Documenting everything delivered in the new version
- Archiving or marking as “Done” the tasks and features of the release in project management tools (like Trello, Jira, Linear and others)

And yes — creating a new release **is** extremely important.

With it, you can track when new features were released, when bugs were fixed, when your team outperformed (and when it didn’t), and keep a record of your deliveries!



# 2. So how We (Beyonders) publish releases?

Inside our company, this process involves many steps, and we can’t explain it without mentioning the two main services we use:

1. **Notion** — to manage each project and track the status of each task.
2. **GitHub** — to store our code repositories.

![Tools we use](/blog/automating-releases/tools.webp "Tools we use")


They are simple and highly customizable, allowing our team to work the way we think is best.

We work with two environments: **Test** and **Production**.

The Test environment is where our team checks everything and publishes new features early, so clients can preview them before they become available to everyone in the Production environment — which is the main website or app.

When working on a project’s tasks, we use Kanban boards in Notion to track progress.

Everything in the “Staging” column should be tested and is in the development (Test) environment. After testing, we mark tasks as “Tested” to ensure everything in the development environment is ready.

Once everything is verified, we move to GitHub. There, we do two things:

1. **Document the release** — create a new release in the repository, increment the version number, and list all completed tasks (with their IDs and contributors from Notion).
2. **Push the codebase to Production** — deploying it so it’s live for all users.

Finally, we return to Notion, move all “Staging” tasks to “Done,” and add the release version number to them.

That’s it — a small process that usually takes about one hour each week.

I know, I know — one hour might not seem like much, but if you multiply the hours spent each month by your hourly rate, you’ll see how much time and money you can save.

So yes — we did it. We automated this entire process.

# 3. How we automated the process

Before starting the automation, we studied the documentation of these services to understand the best way to integrate Notion and GitHub.

After a bit of research, we realized creating custom GitHub Actions wasn’t so bad — it’s actually simple. and we could use the Notion API inside the action code.

So, we moved forward with this idea and started writing our own action that we could reuse in every project.

Instead of just showing you our current action code, I’ll guide you through how we can create this action from scratch.

We’ll start with the **GitHub Action TypeScript template**, which already contains the basic structure we need.

First, let’s analyze the current codebase. It already has a few files, but we’ll focus on the `main.ts` file — that’s where our main logic will go.

Here’s what we need to accomplish in the Code:

1. Get the current project we’re working on, so we know which release we’re publishing.
2. Find the correct database in Notion (using the Notion SDK and filtering by project).
3. Retrieve the tasks ready for release (filtering “Staging” tasks with a “Tested” status).
4. Build the release changelog — a string containing all completed tasks to include in the GitHub release document.
5. Create the GitHub release, which returns the new version number.
6. Update the tasks in Notion to mark them as “Done” and add the new version.

Now that we have everything planned we can code! And that’s exactly what we already did in this repository: [beyonders-oficial/release-action](https://github.com/beyonders-oficial/release-action)

There you can find everything that we mentioned and even more. 

## 4. Conclusion

By combining the flexibility of Notion with the power of GitHub Actions, we built a solution that fits our workflow perfectly, saves us valuable time every single week, and keeps our projects organized and up to date — without the usual manual hassle.

And the best part? This setup can be adapted to any team or project, meaning that once you have it in place, you can focus on what really matters: building great software and delivering value to your users.

Now, I want to invite everyone reading this article to reflect: Is your business or work time-consuming? Do you think you could save time and money with the right integrations and automations?

If the answer is yes, [fill out this form and let's schedule a free consultation](https://app.pipefy.com/public/form/VeI1xD1y), where we will map your processes and help you tackle them with our solutions.