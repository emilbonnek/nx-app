# Nx-App
This project is my first attempt at using Nx from Nrwl.

I have scaffolded two Angular applications that share a common UI library. Nx keeps a dependency graph and monitors changes to every application and library. This is useful for building and testing as it saves time by only rebuilding what is neccesary. This monorepo technique is usefull for small and big projects, but in particular projects that has multiple applications sharing logic, interfaces or UI.
