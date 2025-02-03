
### Activation
Activation function: the typically non-linear function (e.g. ReLU, sigmoid, tanh) that takes as input the weighted sum of the previous layer.

Activations/ Activation maps: The output of the activation function, also see [Feature Maps](#feature-maps)

### Augmentation
Artificially increasing the number of [training examples](#training-set) by transforming existing examples. Depending on the task the same transformation is applied to the labels. Typical augmentations include rotation, flipping, adding noise.

### Auxiliary Task
A task a network is trained on in addition to the primary task but whose output will not be used to obtain the final result.
Read more: [Arlo's work on using auxiliary tasks for instance segmentation in large scale electron microscopy datasets](https://localshapedescriptors.github.io/)

### Backpropagation
Algorithm for performing [gradient descent](#gradient-descent) on neural networks.

### Batch size
Number of examples in a [minibatch](#minibatch).

### Bias
The term bias unfortunately can have two different meanings in the context of DL.
The meaning you’re probably already familiar with, i.e. favoritism towards a specific group of things/people has relevance in DL as in every other science - especially in the context of biased training datasets leading to biased predictions.
Specifically in DL, bias also refers to the offset from the origin, i.e. the term $$b$$ in the following formula: $$h = \sum_i f(x_i w_i + b)$$

### Capacity
The capacity of a deep learning neural network model describes the scope of functions that it is able to learn. While capacity is a somewhat abstract concept the number of [learnable model parameters](#weights-of-a-network) is often a useful proxy. Models with higher capacity have a stronger tendency to [overfit](#overfitting) but might also be necessary to obtain good performance on complex tasks.

### Class-imbalanced dataset
Problem in which the labels for the different classes have significantly different frequencies. If training examples are sampled randomly from those datasets, networks will likely not learn to predict the infrequent classes cause there is very little incentive to.

### Decision Boundary
The space of all possible inputs to your network can be divided into regions giving you the same answer. The surfaces separating those regions from each other are called decision boundaries. For low-dimensional problems this is easy to visualize - as you did in Exercise2 - but with high-dimensional inputs like images the concept becomes increasingly abstract.

### Differentiable
A differentiable function is a function whose derivative exists at each point in its domain. Differentiable functions are smooth, so there will be no angles or jumps. Differentiability is important in deep learning because our optimization algorithms (see [Gradient Descent](#gradient-descent)) depend on computing gradients throughout the network. Interestingly, the popular ReLU nonlinearity is actually non-differentiable. We get away with it because it’s only exactly at 0 where the gradient is not defined.

### Early Stopping
Stopping the training process when a chosen metric indicates that performance on the [validation set](#validation-set) is decreasing. Early stopping is a type of [regularization](#regularization).

### Embedding
An embedding is a low-dimensional representation  of a high(er)-dimensional space. It can be complex and learned, for example the [Latent Space](#latent-space) representation of an image, or simple and fixed, for example assigning an integer index to each unique word in a set of words.

### Epoch
A full training pass over the entire [training set](#training-set) such that each example has been seen once. Sometimes people don’t strictly adhere to this definition and instead use it to refer to a defined number of iterations. Often the [metric](#metrics) on the [validation set](#validation-set) will be evaluated after each epoch.

### Equivariance
Equivariance under a transformation (e.g. translation equivariance) describes the property of a function that applying the function first and the transformation after is the same as applying the transformation first and the function after, i.e. on the transformed input. Convolutions are translationally equivariant i.e. image shift before convolution has the same effect as image shift after convolution.

### Feature Maps
The term feature maps (sometimes also [activation](#activation) maps) is used to refer to the channels of the output of a specific layer. For example, the output of a convolutional layer consists of one channel per [kernel](#kernel), each of those channels is one feature map. So in short: feature maps == channels.

### Generalization
A model’s ability to make correct predictions on new, previously unseen data as opposed to the data used to train the model.

### Gradient Descent
Optimization algorithm that is used to learn the [weights of a network](#weights-of-a-network) by calculating the gradient of the [loss](#loss) functions with respect to the weights and updating the weights in the opposite direction of that gradient (“going downhill in the loss landscape”). Technically, in gradient descent the gradient is calculated across the entire training set but since this is almost never practical, the term is also used as a short-hand for stochastic/[batch](#minibatch) gradient descent.

### Hidden Layer
Any network layer for which we don’t try to impose an opinion on what the values should be. It’s up to the network to figure out what’s most useful. But sometimes the [feature maps](#feature-maps) in hidden layers will be part of what you’re after, in which case we also call them [latent spaces](#latent-space).

### Hyperparameter
Any [parameter](#parameters) that is not updated by the primary training algorithm, e.g. learning rate, [kernel](#kernel) sizes, number of layers, [batch size](#batch-size).

### Instance Segmentation
Partitioning of an image into regions that contain individual instances. For example each cell in a microscopy image or each car in a street scene.

### Kernel
In the context of convolution, kernel refers to the weights used in the calculation of the weighted sum across local neighborhoods. In a convolutional layer the kernels are the weights; their values are learned during training. Also called a filter.

### Latent Space
A latent space is the feature space of a [hidden layer](#hidden-layer). The term is typically used in the context of finding a lower-dimensional representation of your input data and is often the bottleneck in an encoder-decoder architecture. In a good latent space mathematical operations become meaningful - depending on your task this could mean interpolation, addition/subtraction etc. (e.g. word embeddings: “King” - “Man” + “Woman” = “Queen”)

### Logits
The vector of raw (non-normalized) predictions that a classification model generates, which is ordinarily then passed to a normalization function. If the model is solving a multi-class classification problem, logits typically become an input to the softmax function. The softmax function then generates a vector of (normalized) probabilities with one value for each possible class.

### Loss
[Metric](#metrics) that is minimized during [gradient descent](#gradient-descent) . To use a metric as a loss it needs to be [differentiable](#differentiable) with respect to the [weights](#weights-of-a-network).

### Metrics
A measure to evaluate the performance of your model that may or may not be directly optimized by the model.

### Minibatch
The set of examples used in one iteration (in one [gradient update](#gradient-descent)) during training.

### Overfitting
Creating a model that matches the [training data](#training-set) so closely that the model fails to [generalize](#generalization), essentially memorizing the training data.

### Parameters
Depending on context this refers to just the [Weights of a network](#weights-of-a-network) or both the weights and the [Hyperparameter](#hyperparameter).

### Pooling
Pooling layers are a type of downsampling layers, usually reducing the size of a [feature map](#feature-maps) produced by a convolutional layers. The most typical pooling layers are max pooling (taking the maximum value) and average pooling (taking the average value).

### Receptive Field
All pixels in the input image that (potentially) influence the decision made for one specific pixel in the output.

### Regression
Fitting to a continuous variable.

### Regularization
Process of adapting a learning algorithm in order to prevent [overfitting](#overfitting). This happens both explicitly (e.g. by adding additional terms to the [loss](#loss) function that are not measuring task performance but instead things like smoothness or sparseness) and implicitly (e.g. by the choice of optimization algorithm or using [early stopping](#early-stopping))

### Residual Block
A sequence of layers with a skip connection from the beginning to the end, such that the input of the first layer and output of the last layer are added together. Thus, the learned values are a “residual” or delta that is added to the input. The residual connections allow the gradients to “flow” backward through the network directly which can sometimes stabilize training.

### Same Convolution
A convolution that does not change the size of the image. In order to fit the kernel additional boundary values are made up. Possible strategies for setting the values at the boundary are constant (e.g., setting values to 0), mirroring, or just repeating the boundary value again.
Read more: [Guide on convolutional arithmetic](http://arxiv.org/abs/1603.07285)

### Semantic Segmentation
Labeling of each pixel of an image according to the class that it belongs to. For example, each pixel in a microscopy image can be classified as showing background, a living cell, an apoptotic cell. Semantic segmentation can be referred to as a per-pixel classification task.

### Tensor
It’s really a multidimensional array.

### Test Set
Subset of the dataset that you use to report final performance of your model. It must not be used to train the model (that’s what the [training set](#training-set) is for) or to select any [hyperparameters](#hyperparameter) for your model (that’s what the [validation set](#validation-set) is for).

### Training Set
Subset of the dataset that you use to train a model (as opposed to the [validation](#validation-set) and [test set](#test-set)).

### Transfer Learning
Taking a model that was trained for one task/domain and adapting it to work for a different task/domain, of course ideally such that less training data is required for the new task/domain compared to training from scratch.

### U-Net
Most popular network architecture for image-to-image type tasks in biomedical image analysis.
Read more: [The original U-Net paper](https://arxiv.org/abs/1505.04597)

### Valid Convolution
A convolution that only produces output data where the [kernel](#kernel) "fits". A 3 by 3 convolution would decrease the image size by 2 in x and y. See also [Same Convolution](#same-convolution).
Read more: [Guide on convolutional arithmetic](http://arxiv.org/abs/1603.07285)

### Validation Set
Subset of the dataset that you use for validation. Validation is the process of evaluating the performance of models for purposes of finding the best iteration, optimizing [hyperparameters](#hyperparameter), selecting [loss](#loss) functions etc. etc.

### Weights of a network
Learnable [parameters](#parameters) that get updated via [backpropagation](#backpropagation) during training. The weights plus the architecture define a network and are sufficient for reproducing a model.