---
date: 2025-05-31
updated: 2025-06-16
---

# Siberian dogs, fiber, fluff and theater

You may be wondering what the title is trying to say. It is, unsurprisingly, nothing special and has little to do with the actual mammal, the remains of clothing, or anything remotely related to theater.
However, the title is not meant to mislead, but rather to demonstrate the habit of people in tech of naming technical tools after phenomena from the real world.

Recently, I have worked with two interesting tools for frontend development. One of them is [`Husky`](https://typicode.github.io/husky/).

## What is Husky?

[`Husky`](https://typicode.github.io/husky/) is a tool that makes it easier to use [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) in your project. Git hooks are scripts that run automatically at certain points in your git workflow, such as before you commit or push code. Husky helps you set up and share these hooks with your team by including them in your repository.

## Why Use Git Hooks?

Most commonly, git hooks are used for applying static code analysis or formatting before committing your code to the repository—hence the `pre-commit` hook—to ensure code quality.

## Setting Up a Pre-commit Hook

Now, regarding the actual steps in the pre-commit hook, in frontend development often a tool called `lint-staged` is used. The idea is to check the files that are about to be saved into the repository and apply final changes. For example, you could use tools like [`eslint`](https://eslint.org/) or [`prettier`](https://prettier.io/docs/) to perform code quality checks.

So, my `pre-commit` file is nothing out of the ordinary:

```
npx lint-staged
```

It executes a node script that I have set up in my `package.json` file:

```json
{
  ...
  "lint-staged": {
    // All the world's a stage
  },
  ...
}
```

That being said, it is not restricted to linting; arbitrary shell commands can be executed when processing your staged files.

## Example: Automatically Updating Timestamps

For this blog in particular, I used these tools to apply a last modified timestamp to my blog posts.

### What is Frontmatter?

In markdown files, it's common to use a section at the top called "frontmatter" to store metadata about the file. For example:

```yaml
---
date: 2025-05-28
updated: 2025-05-31
---
```

Here, `date` is when the post was created, and `updated` is the last time it was modified.

### Keeping the `updated` Date Current

I wanted to make sure that, whenever I edit a blog post, it contains the last updated date.
For that I implemented a small shell script. It computes the current date, for instance `2025-05-31`, which represents `May 31, 2025`, and adds that to whatever date is given in the markdown file at the key `updated`:

```sh
sed -i "0,/^updated: [0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}/s//updated: $(date +%Y-%m-%d)/" "$1"
```

Then I added that to the `lint-staged` section to make sure each time I commit that markdown file, my blog post would get a date that resembles the last modified time:

```json
{
  ...
  "lint-staged": {
    "**/*.md": "sh -c 'sed -i \"0,/^updated: [0-9]\\{4\\}-[0-9]\\{2\\}-[0-9]\\{2\\}/s//updated: $(date +%Y-%m-%d)/\" \"$1\"' _"
  },
  ...
}
```

After I commit this blog post, its `updated` date is set to the changed date automatically:

```yaml
---
date: 2025-05-28
updated: 2025-06-14
---
```

## Summary
Adding a modified timestamp after changing a blog post is a practical and easy-to-understand use case for repurposing `husky` and `lint-staged` beyond their typical usage scenarios. It demonstrates their flexibility and provided me with practical insight into development workflows that are limited only by one's creativity.

Thanks for checking in. See you next time!

~ jacky

