FROM cameolon/server:wordpress

# Copying Themes and Plugins into the wordpress image
#COPY ["themes","/usr/src/wordpress/wp-content/themes"]
COPY ["./server/plugins","/var/www/html/wp-content/plugins"]
COPY ["./server/config","/var/www/html"]

# Applying the execution right on the folders for apache
COPY entrypoint-child.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint-child.sh
ENTRYPOINT ["entrypoint-child.sh"]
CMD ["apache2-foreground"]