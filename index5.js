/*
5.URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.
*/

function validateURL(url) {
    // Regular expression to validate URLs
    const urlPattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:\/?#\[\]@!$&'()*+,;=]+(\.[a-zA-Z]+)$/;

    if (urlPattern.test(url)) {
        console.log("Valid URL");
    } else {
        console.log("Invalid URL");
    }
}

// Test cases
validateURL("http://example.com");
validateURL("https://my-site.org");
validateURL("ftp://invalid-url.com"); // This should be invalid
validateURL("https://another-site.co.in");
