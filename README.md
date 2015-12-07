# firebase-user-signup-demo
Demo Firebase simple user signup via email/password authentication.

Creates a user with a random hash password in Firebase and then stores the following in NoSQL:

	root
	|--users:
	|  `--$userId:
	|     `--createTime: Sun Dec 06 2015 23:04:35 GMT-0800 (PST)
	|     `--email: john@example.org,
	|     `--userAgent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2580.0 Safari/537.36

On success, fires an alert in the browser.

See dev console for some logs.
