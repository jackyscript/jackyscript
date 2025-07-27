---
date: 2025-07-15
updated: 2025-07-27
---

# Using Mailpit for Local E-Mail Testing

Recently, I needed to test a web application that sends emails after various events—things like users registrations, password resets, and notifications triggered by user actions. It is quite cumbersome to set up different mail accounts and make sure to receive the emails, especially when all you have is a mail terminal program. Moreover it is near impossible to reliably check every setup mail account and look up if the emails were actually sent to the recipients I was checking for.

I got to start thinking maybe only a compromise regarding such tests is feasible, I started that whole process, because I was asked in a code review to check these new features. But I felt you cannot state with confidence this works and this bothered me quite a bit.

So when asking for help and ideas for testing, I got the advice to overwrite the SMTP settings of my backend development server. So I did a quick search for an SMTP server for development and found out about Mailpit.

## Getting Started

Since on my job I work on a Mac, I installed Mailpit using Homebrew:

```sh
brew install mailpit
```

No further configuration was required.

## Running Mailpit

To get started, I just ran:

```sh
mailpit
```

By default, Mailpit listens for SMTP connections on port `1025` and serves a web UI at [http://localhost:8025](http://localhost:8025). The terminal output confirmed both were up and running.

## Pointing My App to Mailpit

My web app uses Pocketbase for sending emails. All I had to do was update the SMTP settings to point to `localhost:1025`.

For testing, I did that directly in the Admin UI of Pocketbase. However, after saving a server-side script, the SMTP settings were reset. So I would recommend creating a settings script instead.

But for testing, in most cases, this is just fine.

No authentication is needed; however, I did change the TLS check to AutoTLS under `Show more options`, otherwise errors in this regard would occur.

## Testing the Flow

With Mailpit running, I triggered a few actions in my app that would normally send emails. Sure enough, every message appeared instantly in the Mailpit web UI. The interface is clean and makes it easy to inspect the email content, recipients, and headers. I could quickly verify that the right emails were being sent at the right times, and could also check for formatting or similar issues.

## Final Impressions

Mailpit turned out to be exactly what I needed: a simple, reliable way to catch and review emails during development. I’ll definitely keep it in my toolkit for future projects.

If you’re working on anything that sends email, I recommend giving it a try!

Thanks for reading. See you next time!

~ jacky

