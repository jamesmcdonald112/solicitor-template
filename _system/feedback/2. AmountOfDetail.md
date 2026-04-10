The research gives a clear answer. Here's what it says and how it applies to your project:

**One component at a time is better for quality. Here's why:**

The single biggest constraint in Claude Code is the context window. Performance degrades as it fills. When you ask Claude to build five components in one session, by the time it reaches component four it is working with a much fuller context window and makes more mistakes. This is why the later components in a multi-component session often come out worse than the first ones.

The research also shows that tight feedback loops produce better results than long autonomous runs. "Give Claude visual mock → implement → screenshot → compare → iterate" is the recommended pattern for design work specifically.

**But pure one-at-a-time has a problem too:**

You lose visual coherence. If you build the TrustStrip without the Hero visible, you cannot judge whether the spacing transition between them works. The components need to be seen together at some point.

**The right approach for your project:**

Design the full page in chat first — that's what we do here. Then build in terminal one component at a time, each in a fresh session. Wire each component into the page as you go so you can see it in context in the browser after each one.

So the workflow is:

```
Chat (here) — design the full page, write layout concepts

Terminal — fresh session per component:
  Build Navbar → check in browser → /clear
  Build Hero → check in browser → /clear
  Build TrustStrip → check in browser → /clear
  etc.
```

Use `/clear` between each component. Do not let the session run on. Each component gets clean context, full attention, and you review it in the browser before moving to the next one.

The sessions are shorter, the quality is higher, and if one component comes out wrong you only lost that component — not the whole session.