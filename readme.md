> I am a javascript developer and I want to write a Node.js package using ECMAScript 2015 features. Users of the package require it to be available for both Node.js and the browser. 

# Choosing an approach

This section contains possible approaches and their up- and downsides. 

## Approaches

### Approach **A#1**: Install-time build.

In the case of Node.js, build the package as it is installed based on the Node.js version. 

### Approach **A#2**: Run-time build.

Build the package on the fly based on the environment. 

### Approach **A#3**: Publish-time build.

Build the package for all elegible target platforms. 

## Features

The table below summarizes the advantages and disadvantages of each approach. 

|Code|Feature|Category|**A#1**|**A#2**|**A#3**|
|:---:|---|---|:---:|:---:|:---:|
|**F#1**|Automatic version selection.                                   |Usability         |✔|✔|_|
|**F#2**|Automatic version selection cannot fail.                       |Unexpected Error  |✘|✔|✔|
|**F#3**|No need to build for all possible platforms.                   |Development Effort|✔|✔|✘|
|**F#4**|No need to build package while running.                        |Operating Speed   |✔|✘|✔|
|**F#5**|No need to download development dependencies.                  |Installation Speed|✘|✘|✔|
|**F#6**|Package will not suddenly fail after changing Node.js versions.|Unexpected Error  |✘|✔|✔|
|**F#7**|Approach applies to browser environments.                        |Applicability     |✘|✔|✔|

## Conclusion

Feature **F#7** rules out **A#1** because almost all packages need to be available in the browser. Feature **F#4** rules out **A#2** because the increased start-up time is almost never worth it. 

This leaves approach **A#3** which might satisfy **F#1** and does not satisfy features **F#3**. Users will need to select the right version of your package according to their platform or the package can `require` the right version based on the Node.js version. The developer will need to determine the most common platforms on which the package will be used and build the package for those platforms.

# A method for approach **A#3**

Approach **A#3** gives rise to the following question: 

> How do we provide builds of the same version of a package?

## Methods

### Method **M#1**: Single package.

Create a single package that contains built versions for all platforms.

### Method **M#2**: Multiple packages.

Create a package for each platform

### ~~Method **M#3**~~: Multiple distribution tags.

Unfortunately, npm does not do anything with semver's build information. If a version is specified like this: `x.x.x-prerelease+buildinfo`, npm drops the `buildinfo`. It would be nice if we could have version specifications like `^3.1.4+node4` which would install version `3.2.2+node4` but not `3.2.2`. 

## Features

|Code|Feature|**M#1**|**M#2**|
|:---:|---|:---:|:---:|
|**F#8**|Single package.|✔|✘|
|**F#9**|Download single version.|✘|✔|
|**F#10**|Optional automatic version selection.|✔|✘|

## Conclusion

This is where you come in? How do we select the right method? Are there more options? How do we actually realize this? Maintain multiple git branches for each platform and pull changes in each of them everytime a version is released, or do we generate an entire platform specific package from the source package?
