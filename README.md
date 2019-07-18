Publish key: Api pub-c-e958872a-449a-4bcf-b997-7c05ad366b4d

Sub Key: sub-c-13a09a4c-a8f4-11e9-b39e-aa7241355c4e

# Defualt Template for SDG .NET Course

This is the default template for a simple .NET Core Web React App. This template has:

- CORS Enabled
- Postgres & EF Core
- Swagger
- Ready for Docker Deployment

to use:

- [ ] Update your database name in `DatabaseContext.cs`

to Deploy to heroku:

- [ ] create a web app on heroku, make sure to have the CLI downloaded, installed, logged in and be logged into the container via heroku.
- [ ] Update your `dockerfile` to use your `*.dll` file instead of `dotnet-sdg-template.dll`
- [ ] Update the deploy script:
  - [ ] change `sdg-template-image` to `your-project-name-image`
  - [ ] change `heroku-web-app` to your web app name on heroku

## PROTIP:

When you are complete with the project and have turned it in to your instructor, update this read me with details about the assignment.
