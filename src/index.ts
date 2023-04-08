import { createApp } from "./app";

(async () => {
  const app = await createApp();

  const port = process.env.PORT || 3000;
  app.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
    console.log(
      `🔗 Apollo Server available at http://localhost:${port}/graphql/helloworld`
    );
    console.log(`📚 ReDoc available at http://localhost:${port}/redoc/apis`);

    if (process.env.NODE_ENV !== 'production') {
      console.log(
        `🎮 GraphQL Playground available at http://localhost:${port}/playground`
      );
    }
  });
})();
