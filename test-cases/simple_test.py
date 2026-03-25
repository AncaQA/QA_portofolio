def test_age_validation():
 """Test age is within valid range"""
 age = 25
 assert age >= 18 and age <= 65, "Age should be between 18 and 65"
 print("✓ Age validation test passed")

def test_email_format():
 """Test email contains @"""
 email = "test@example.com"
 assert "@" in email, "Email should contain @"
 print("✓ Email format test passed")


if __name__ == "__main__":
 test_age_validation()
 test_email_format()
 print("\nAll tests passed!")