Feature: Create a new post


  Scenario: TC01: should create a post with valid data
    When I send a POST request to "/posts" with body:
      """
      {
        "title": "My First Post",
        "body": "Hello world from Playwright!",
        "userId": 1
      }
      """
    Then the response status should be 201
    And the response body should have property "id"
    And the response body "title" should be "My First Post"

  Scenario: TC03: should fail when userId is not a number
    When I send a POST request to "/posts" with body:
      """
      {
        "title": "Invalid UserId",
        "body": "This should fail",
        "userId": "abc"
      }
      """
    Then the response status should be 400

  Scenario: TC04: should fail when sending empty body
    When I send a POST request to "/posts" with empty body
    Then the response status should be 400
