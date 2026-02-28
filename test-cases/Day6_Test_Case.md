Test Case ID: TC_PWD_RESET_001

Title: Verify reset password functionality 

Preconditions:
- be on the login page of the application
- have a login email: user1234@email.com
- current password: Password23*


Test Steps:                                                        
1. Click on the 'Reset password' button -> Reset password page is displayed 
2. insert the email address in the user field -> email address is in the user field
3. Insert a new password in the password field:Password1234 -> The following can be observed: 
											      password remains in the password field
											      new password meets the criteria 
4. Re-type the password in the 'Re-type password' field -> password matches the password from the above field
							  
5. Click on the 'Reset' button -> the following can be observed: the password has been successfully reset 
								 the corresponding confirmation message is displayed 

Test Data:
- Email: user1234@email.cm
- New password : Password1234

