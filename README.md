Blog 1

interface extend করা যায়, কিন্তু type-এর ক্ষেত্রে type manually বাড়াতে হয়। interface অনেকবার use করা যায়, কিন্তু type শুধু একবারই করা যায়। তবে interface-এর জন্য name গুলো same হতে হয়। type-এর ক্ষেত্রে এটা error দেয়। কিন্তু complex code-এ type use করা ভালো।


Blog 2
any আর unknown same মনে হলেও, any use করলে TypeScript কোনো type check করে না। এই জন্য unknown use করতে হয়, কারণ এটা আগে type check করে নেয়। বড় project-এ unknown বেশি use হয়। never type মানে হচ্ছে, এটা কোনো কিছুই return করবে না।

