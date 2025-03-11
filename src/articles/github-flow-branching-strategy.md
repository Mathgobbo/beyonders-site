---
title: "Github Flow Branching Strategy"
description: "A complete and easy to use branching strategy. In this post we will go through its details and how to apply it in your repositories."
author: "Matheus Gobbo Bernardi"
authorPicture: "/team/matheus.webp"
category: "git"
date: "2024-10-07"
bannerImage: "/blog/github-flow/banner.webp"
tags:
  - git
  - github
  - github-flow
  - strategies
  - software-development
  - branch
  - branch-strategy
---

Github Flow is the name of a poupular branching strategy, widely adopted by it's benefits, advantages and convenience. Very easy to understand, so anyone in the team can participate in the release process!
We already talked about [Github Flow and other branching strategies in this post](/blog/post/git-branching-strategies), so if you're curious about them, don't miss the chance and read that article!

But let's go!

First things first, the Gihub flow is designed for teams that realease new versions very often (like weekly, daily or even many times a day). And this can bring many advantages, like:

- **Reduced risk of major bugs**: Many deployments minimizes the chance of introducing large, complex bugs, as only small, manageable changes are pushed.
- **Quick resolution of minor issues**: Small issues that arise can be fixed and redeployed rapidly without major disruptions.
- **Simplified process for hotfixes**: There's no need for a separate hotfix process, as handling small fixes is part of the normal workflow, making the process more streamlined.
- **Rapid response to security issues**: Deploying frequently allows for faster responses to security vulnerabilities, ensuring issues are addressed promptly.
- **Quick implementation of new features**: Small feature requests can be implemented and deployed quickly using the same streamlined process used for other changes.

### All right, so how does it works?

We can explain this strategy with 6 simple steps.

1. **Everything in `master` is deployable.**

   - The `master` branch should always be stable and ready to deploy at any moment. This means that if you push something there, it’s essentially like telling your team, "Hey, we’re ready to deploy this now." This is the heart of GitHub Flow: keeping `master` as a reliable source that’s never broken.

2. **Create descriptive branches off `master`.**

   - If you want to add a new feature, start by creating a new branch directly from `master`. It’s better if the name is descriptive (like `feature/new-oauth2-scopes`), so everyone else in your team can see what you’re working on.

3. **Commit and push constantly.**

   - Don’t be afraid to push your progress to the remote branch regularly. It’s like marking your position so everyone knows where you are. Not only does this back up your work, but it also opens up collaboration opportunities for the team.

4. **Open a pull request at any time.**

   - A pull request (PR) doesn’t mean you’re done; it means, “Hey, I’m out here—could someone take a look?” This is like raising your hand to say you need help or feedback, whether you’ve just started or finished. This ongoing communication allows your team to collaborate effectively.

5. **Merge after a pull request review.**

   - Before merging, get signoff from a teammate to ensure your changes won’t mess up the production environment. This peer review, even if it’s just a thumbs-up or a “🙌” emoji, is essential to maintaining stability.

6. **Deploy immediately after merging.**
   - Once merged, it’s time to deploy. Even non-developers should be able to deploy to production. The goal is to make deployments a non-event so easy that anyone could do it. A simple command in a chat room robot (or something like this), and your code is live.

### Origins of this method

This strategy didn't get its name for nothing. It was born inside Github, and used by their teams inside their main project (Github itself). And this article was inspired by a page published by one of Github co-founders, [Scott Chacon](https://github.com/schacon).
He thought about this strategy when being asked about what he thinks about the [git-flow strategy](https://nvie.com/posts/a-successful-git-branching-model/), and Scott tells that this strategy is great, but most of the teams (including Github) don't require a complex strategy to achieve great results, and that a simplified process can bring many advantages, like we commented before.

### Results

Inside Beyonders we don't think different. We like solutions that can bring benefits without much complexity. We have our own strategy, where we mix the Github and Feature strategies together, but always in a simple way, so we can implement a new release fast, without worries of breaking something in production.

Thanks for the reading and see you in the next post 👋
