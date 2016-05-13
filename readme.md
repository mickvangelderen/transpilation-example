What is a good way to publish your es2015 package for use in node 4, node 5, node 6, browser and other environments?

So far I've seen two approaches:

1. building your package for all elegible target platforms you can think of and
2. building your package at installation time for the node version being used (and optionally providing a separate build for browsers). 

Downsides of approach 1 are:

1. forgetting to compile for some environment and
2. having everyone download a lot of code that is not even used (or requiring users to select the right version).

Downsides of approach 2 are:

1. postinstall has a bad reputation,
2. it requires users to download all development dependencies, 
3. automatic version detection might fail and
4. if node is upgraded the packages won't be automatically rebuilt. 

Especially the last downside of approach 2 can create nasty, difficult to find, problems. I think we should go with approach 1 despite its downsides. 

Providing different versions of your package for all platforms can be done in a number of ways:

1. create build folders for all environments in your package as was done in this example. 
2. create and maintain multiple packages: my-package-node-4, my-package-node-5 and so on..
3. create and maintain multiple distribution tags and versions: provide tags like `my-package@latest-node4`, `my-package@latest-node5` and publish versions like `2.1.5-node4`, `2.1.5-node5` according to [http://semver.org/](semver). 

Perhaps method 3 is the neatest one, but it is more error prone for the developer and requires some explanation to the users of the package. It is the neatest one because it doesn't flood the npm registry and it doesn't force the user to download multiple versions of the same code of which most aren't even used. 
