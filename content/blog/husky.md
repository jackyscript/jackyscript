---
date: 2025-05-31
updated: 2025-06-01
---

# Siberian dogs, fiber, fluff and theater

You may be wondering what the title is trying to say. It is, unsurprisingly, nothing special and has little to do with the actual mammal, the remains of clothing, or anything remotely related to theater.
However, the title is not meant to mislead, but rather to demonstrate the habit of people in tech of naming technical tools after phenomena from the real world.

Recently, I have worked with two interesting tools for frontend development. One of them is [`Husky`](https://typicode.github.io/husky/).

With it, you can easily set up custom processes called [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) that are automatically executed when working with the `git` version control system. Additionally, it allows you to share these git hooks with your team by including them in your repository.

Most commonly, git hooks are used for applying static code analysis or formatting before committing your code to the repository—hence the `pre-commit` hook—to ensure code quality.

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
For this blog in particular, I used these tools to apply a last modified timestamp to my blog posts.

Basically, I add two timestamps as metadata in a special section of my blog files above the actual content to denote the date the blog post was initially created and the last modified date, like so:

```yaml
---
date: 2025-05-28
updated: 2025-05-31
---
```

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

This feature alone is not so exciting, but for me, it was a test field where I could experiment—taking `lint-staged` and using it for a different use case—which served me well.

Thanks for checking in. See you next time!


~ jacky
