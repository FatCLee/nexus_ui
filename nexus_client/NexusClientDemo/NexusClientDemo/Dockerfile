FROM microsoft/aspnetcore:2.0-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0-nanoserver-1709 AS build
WORKDIR /src
COPY NexusClientDemo/NexusClientDemo.csproj NexusClientDemo/
RUN dotnet restore NexusClientDemo/NexusClientDemo.csproj
COPY . .
WORKDIR /src/NexusClientDemo
RUN dotnet build NexusClientDemo.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish NexusClientDemo.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "NexusClientDemo.dll"]
